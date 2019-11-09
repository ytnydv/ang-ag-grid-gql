import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


import { HttpLink } from 'apollo-angular-link-http';
import { ApolloLink, concat } from 'apollo-link';
import { HttpHeaders } from '@angular/common/http';
import { InMemoryCache } from 'apollo-cache-inmemory';

@Injectable({
    providedIn: 'root'
})
export class GraphqlService {
    public owners: any;
    public gridOptions: any;

    constructor(private apollo: Apollo, httpLink: HttpLink) {

        const http = httpLink.create({ uri: "http://localhost:3000/graphql" });

        const authMiddleware = new ApolloLink((operation, forward) => {
            // add the authorization to the headers
            // console.log("localStorage.getItem('currentUser')====", JSON.parse(localStorage.getItem('currentUser')).token);
            operation.setContext({

                headers: new HttpHeaders().set('auth', JSON.parse(localStorage.getItem('currentUser')).token || null)
            });

            return forward(operation);
        });

        apollo.create({
            link: concat(authMiddleware, http),
            cache: new InMemoryCache(),
        });
    }

    getRows(params) {
        let jsonRequest = JSON.stringify(params.request, null, 2);
        // console.log("getRows======", params);
        console.log("jsonRequest======", jsonRequest);
        // console.log("PARSED = jsonRequest======", JSON.parse(jsonRequest));

        const columns = this.gridOptions.columnDefs;

        // query GraphQL endpoint
        this.apollo.watchQuery(this.query(params.request, columns))
            .valueChanges.subscribe((response: any) => {
                // console.log("response-----------", response);
                const rows = response.data.rows;

                // determine last row to size scrollbar and last block size correctly
                let lastRow = -1;
                if (rows.length <= this.gridOptions.cacheBlockSize) {
                    lastRow = params.request.startRow + rows.length;
                }

                // pass results to grid
                params.successCallback(rows, lastRow);


                // if (response.success) {
                //     params.successCallback(response.rows, response.lastRow);
                // } else {
                //     params.failCallback();
                // }
            });

    }


    query(request, columns) {

        const fields = columns.map(col => col.field);

        return {
            query: gql`
            query GetRows(
                $start: Int, 
                $end: Int, 
                $sortModel: [SortModel], 
                $groups: [RowGroup], 
                $groupKeys: [String]
              ) {
              rows(
                startRow: $start,    
                endRow: $end,
                sorting: $sortModel,
                rowGroups: $groups, 
                groupKeys: $groupKeys       
              ) {
                ${fields}
              }
            }
          `,
            variables: {
                start: request.startRow,
                end: request.endRow,
                sortModel: request.sortModel,
                groups: request.rowGroupCols,
                groupKeys: request.groupKeys
            },
        }
    };
}


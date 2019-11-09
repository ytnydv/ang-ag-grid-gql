import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';
import { AuthenticationService } from '../_services';


import { HttpClient } from "@angular/common/http";
import "ag-grid-enterprise";

import { GraphqlService } from "../graphql.service";

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users: User[];




    title = 'ag-grid-cli-demo';

    private gridApi;
    private gridColumnApi;

    private defaultColDef;
    private rowModelType;
    private cacheBlockSize;
    private maxBlocksInCache;
    private rowData: [];
    public gridOptions;
    public columnDefs;

    private paginationPageSize;
  private paginationNumberFormatter;
  selectValue = null;

    constructor(private http: HttpClient, 
        public gqlService: GraphqlService, 
        private userService: UserService, 
        private authenticationService: AuthenticationService) {
        this.columnDefs = [
            { field: 'athlete', filter: 'agTextColumnFilter', },
            { field: 'country', filter: 'agTextColumnFilter', },
            { field: 'sport', filter: 'agTextColumnFilter', },
            { field: 'year' },
            { field: 'age' },
            { field: 'gold', type: 'valueColumn' },
            { field: 'silver', type: 'valueColumn' },
            { field: 'bronze', type: 'valueColumn' },
        ];

        const columnDefs = this.columnDefs;

        var that = this;
        this.gridOptions = {

            columnDefs,

            // use the server-side row model
            rowModelType: 'serverSide',

            // fetch 100 rows per at a time
            cacheBlockSize: 200,

            // only keep 100 blocks of rows
            maxBlocksInCache: 100,

            sideBar: false,

            pagination: true,

            columnTypes: {
                dimension: {
                    enableRowGroup: false,
                    enablePivot: false,
                },
                valueColumn: {
                    width: 150,
                    aggFunc: 'sum',
                    enableValue: true,
                    cellClass: 'number',
                    allowedAggFuncs: ['avg', 'sum', 'min', 'max']
                }
            },
        };

        this.paginationPageSize = 10;

        this.defaultColDef = {
            width: 120,
            resizable: true,
            sortable: true,
            filter: true
        };

    }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
            console.log("this.users", this.users);
        });
    }

    onLogout() {
        this.authenticationService.logout();
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        this.gqlService.gridOptions = this.gridOptions;
        const datasource = this.gqlService;
        this.gridApi.setServerSideDatasource(datasource);
    }

    onPageSizeChanged(val) {
        // let value = document.getElementById("page-size").nodeValue;
        // console.log("value", value, val);
        this.gridApi.paginationSetPageSize(Number(val));
      }
}
import { NgModule } from '@angular/core';
import { MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatTooltipModule,
    MatDialogModule,
    MatProgressSpinnerModule, 
    MatPaginatorModule} from '@angular/material';

@NgModule({
    imports: [
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatInputModule,
        MatCardModule,
        MatDividerModule,
        MatTooltipModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatPaginatorModule
    ],
    exports: [
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatInputModule,
        MatCardModule,
        MatDividerModule,
        MatTooltipModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatPaginatorModule
    ]
})
export class MaterialModule { }

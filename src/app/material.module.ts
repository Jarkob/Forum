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
    MatProgressSpinnerModule } from '@angular/material';

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
        MatProgressSpinnerModule
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
        MatProgressSpinnerModule
    ]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatTooltipModule } from '@angular/material';

@NgModule({
    imports: [
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatInputModule,
        MatCardModule,
        MatDividerModule,
        MatTooltipModule
    ],
    exports: [
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatInputModule,
        MatCardModule,
        MatDividerModule,
        MatTooltipModule
    ]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatTooltipModule,
    MatDialogModule} from '@angular/material';

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
        MatDialogModule
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
        MatDialogModule
    ]
})
export class MaterialModule { }

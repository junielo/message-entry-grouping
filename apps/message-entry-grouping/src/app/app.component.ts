import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
  ],
  selector: 'message-entry-grouping-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  title = 'message-grouping-ai';
  chatMessages: string[] = ['first message', 'second message', 'third message', 'fourth message', 'fifth message', 'sixth message', 'seventh message', 'eighth message', 'ninth message', 'tenth message', 'eleventh message', 'twelfth message', 'thirteenth message', 'fourteenth message', 'fifteenth message', 'sixteenth message', 'seventeenth message', 'eighteenth message', 'nineteenth message', 'twentieth message', 'twenty-first message', 'twenty-second message', 'twenty-third message'];

  sendMessage() {
    throw new Error('Method not implemented.');
  }
  clearMessages() {
    throw new Error('Method not implemented.');
  }
}

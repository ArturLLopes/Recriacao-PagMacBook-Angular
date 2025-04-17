import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-design',
  imports: [CommonModule],
  templateUrl: './design.component.html',
  styleUrl: './design.component.css'
})
export class DesignComponent {
  selectedColor: string = 'skyblue';

<<<<<<< Updated upstream
  selectedColor: string = 'skyblue';

=======
>>>>>>> Stashed changes
  colors = [
    { value: 'skyblue', label: 'Azul-céu', hex: '#c8d8e0' },
    { value: 'silver', label: 'Prateado', hex: '#e3e4e6' },
    { value: 'starlight', label: 'Estelar', hex: '#f0e4d3' },
    { value: 'midnight', label: 'Meia-noite', hex: '#2e3642' }
  ];

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  onColorChange(color: string): void {
    this.selectedColor = color;
  }

  getImageSrc(type: 'side' | 'magsafe' | 'top'): string {
    return `assets/img/colors/design_${type}_${this.selectedColor}.jpg`;
  }
}

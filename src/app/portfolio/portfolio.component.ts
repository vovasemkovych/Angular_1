import { Component, ViewEncapsulation } from '@angular/core';

interface PortfolioItem {
  title: string;
  imageUrl: string;
  description: string;
}
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  encapsulation: ViewEncapsulation.None 
})
export class PortfolioComponent {
  portfolioItems: PortfolioItem[] = [
    { title: 'Solis', imageUrl: '../../assets/img/Layout_1.png', description: 'Lorem ipsum...' },
    { title: 'Monticello', imageUrl: '../../assets/img/Layout_2.png', description: 'Lorem ipsum...' },
    { title: 'Mousiqua', imageUrl: '../../assets/img/Layout_3.png', description: 'Lorem ipsum...' },
    { title: 'In Progress...', imageUrl: '../../assets/img/Layout_4.jpg', description: 'Lorem ipsum...' },
  ];

  newTitle: string = '';
  newImageUrl: string = '';
  newDescription: string = '';

  
  addPortfolioItem() {
    if (this.newTitle && this.newImageUrl && this.newDescription) {
      this.portfolioItems.push({
        title: this.newTitle,
        imageUrl: this.newImageUrl,
        description: this.newDescription,
      });
      
    
      this.newTitle = '';
      this.newImageUrl = '';
      this.newDescription = '';
    }
    
  }
  restoreDefaultProjects() {
    this.portfolioItems = [
      { title: 'Solis', imageUrl: '../../assets/img/Layout_1.png', description: 'Lorem ipsum...' },
      { title: 'Monticello', imageUrl: '../../assets/img/Layout_2.png', description: 'Lorem ipsum...' },
      { title: 'Mousiqua', imageUrl: '../../assets/img/Layout_3.png', description: 'Lorem ipsum...' },
      { title: 'In Progress...', imageUrl: '../../assets/img/Layout_4.jpg', description: 'Lorem ipsum...' },
    ];
  }
  deletePortfolioItem(index: number) {
    this.portfolioItems.splice(index, 1);
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-article-new',
  standalone: true,
  imports: [],
  templateUrl: './article-new.component.html',
  styleUrl: './article-new.component.css'
})
export class ArticleNewComponent {

  constructor(private fb: FormBuilder) {}

  articleForm: FormGroup = this.fb.group({
    articleTitle: [''],
    articleContent: [''],

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      
    }
    
  })

}

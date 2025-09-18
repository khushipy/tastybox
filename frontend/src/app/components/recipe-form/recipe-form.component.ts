import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {
  recipeForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.recipeForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      ingredients: ['', Validators.required],
      instructions: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.recipeForm.invalid) {
      return;
    }

    this.loading = true;
    const formValue = this.recipeForm.value;
    
    // Convert ingredients string to array
    const ingredients = formValue.ingredients
      .split('\n')
      .map((ingredient: string) => ingredient.trim())
      .filter((ingredient: string) => ingredient);

    const recipeData = {
      title: formValue.title,
      ingredients,
      instructions: formValue.instructions
    };

    this.recipeService.createRecipe(recipeData).subscribe({
      next: () => {
        this.snackBar.open('Recipe created successfully!', 'Close', { duration: 3000 });
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error creating recipe:', error);
        this.snackBar.open('Failed to create recipe', 'Close', { duration: 3000 });
        this.loading = false;
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }
}

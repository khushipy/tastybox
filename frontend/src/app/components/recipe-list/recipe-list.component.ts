import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RecipeService, Recipe } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  loading = true;

  constructor(
    private recipeService: RecipeService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadRecipes();
  }

  loadRecipes(): void {
    this.loading = true;
    this.recipeService.getRecipes().subscribe({
      next: (recipes) => {
        this.recipes = recipes;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading recipes:', error);
        this.snackBar.open('Failed to load recipes', 'Close', { duration: 3000 });
        this.loading = false;
      }
    });
  }

  deleteRecipe(id: string): void {
    if (confirm('Are you sure you want to delete this recipe?')) {
      this.recipeService.deleteRecipe(id).subscribe({
        next: () => {
          this.recipes = this.recipes.filter(recipe => recipe._id !== id);
          this.snackBar.open('Recipe deleted successfully', 'Close', { duration: 3000 });
        },
        error: (error) => {
          console.error('Error deleting recipe:', error);
          this.snackBar.open('Failed to delete recipe', 'Close', { duration: 3000 });
        }
      });
    }
  }
}

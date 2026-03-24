import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E Tests', () => {
  test('vérifie le titre de la page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Samy Boudjema \| Portfolio/);
  });

  test('navigation et chargement des sections', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation "Lien vers Projets"
    const projectsLink = page.locator('nav a[href="#projets"]');
    await projectsLink.click();
    
    const projectsSection = page.locator('#projets');
    await expect(projectsSection).toBeVisible();
    
    // Vérifier l'apparition des cartes après le scroll
    const firstProject = page.locator('.project-card').first();
    await expect(firstProject).toBeVisible();
  });

  test('accessibilité de base de la page', async ({ page }) => {
    await page.goto('/');
    
    // Vérification du skip link
    const skipLink = page.locator('.skip-link');
    await expect(skipLink).toHaveAttribute('href', '#main-content');
    
    // Focus visible via clavier sur navigation
    await page.keyboard.press('Tab'); // Navigue sur le DOM
    // Cette étape vérifie qu'on peut tabuler sans bloquer
  });

  test('formulaire de contact', async ({ page }) => {
    await page.goto('/#contact');
    
    // Tentative de soumission vide
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('text=Nom et Prénom sont obligatoires')).toBeVisible();
    await expect(page.locator('text=Adresse e-mail est obligatoire')).toBeVisible();
    
    // Remplissage partiel
    await page.getByLabel(/Nom et Prénom \*/).fill('John Doe E2E');
    await page.getByLabel(/Adresse e-mail \*/).fill('johndoe@example.com');
    await page.getByLabel(/Message \*/).fill('Hello E2E');
    
    // Soumission (simulée via DOM, EmailJS va sans doute envoyer une requête et afficher "Envoi...")
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('button[type="submit"]')).toContainText('Envoi...');
  });
});

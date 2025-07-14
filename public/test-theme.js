// This script can be used to test if the theme switching functionality is working correctly
// It can be loaded in the browser console for testing purposes

function testThemeSwitching() {
  console.group('🌓 Theme Switching Test');
  
  try {
    // Get the theme from local storage
    const currentStoredTheme = localStorage.getItem('future-tunisia-theme');
    console.log(`Current theme in localStorage: ${currentStoredTheme || 'Not set (defaults to system)'}`);
    
    // Check if the HTML element has the correct class
    const htmlElement = document.documentElement;
    const hasLightClass = htmlElement.classList.contains('light');
    const hasDarkClass = htmlElement.classList.contains('dark');
    
    console.log(`HTML element has 'light' class: ${hasLightClass}`);
    console.log(`HTML element has 'dark' class: ${hasDarkClass}`);
    
    // Test toggling themes
    console.log('\nTesting theme toggling:');
    
    // Store original theme to restore later
    const originalTheme = currentStoredTheme;
    
    // Test setting to light mode
    console.log('\n➡️ Setting theme to "light"');
    localStorage.setItem('future-tunisia-theme', 'light');
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    console.log('Light theme applied ☀️');
    
    // Test setting to dark mode
    console.log('\n➡️ Setting theme to "dark"');
    localStorage.setItem('future-tunisia-theme', 'dark');
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    console.log('Dark theme applied 🌙');
    
    // Restore original theme
    console.log('\n➡️ Restoring original theme');
    if (originalTheme) {
      localStorage.setItem('future-tunisia-theme', originalTheme);
    } else {
      localStorage.removeItem('future-tunisia-theme');
    }
    
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log(`\nSystem preference is for ${prefersDark ? 'dark' : 'light'} mode`);
    
    console.log('\n✅ Theme switching test completed');
    console.log('Refresh the page to see the original theme');
  } catch (error) {
    console.error('❌ Error during theme testing:', error);
  }
  
  console.groupEnd();
}

// Execute the test
testThemeSwitching(); 
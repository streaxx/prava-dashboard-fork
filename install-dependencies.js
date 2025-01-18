import { execSync } from 'child_process';

console.log('Installing dependencies...');

try {
  execSync('npm install framer-motion react-icons', { stdio: 'inherit' });
  console.log('Dependencies installed successfully!');
} catch (error) {
  console.error('Error installing dependencies:', error.message);
}


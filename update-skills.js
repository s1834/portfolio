const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Skills schema
const skillsSchema = new mongoose.Schema({
  slug: { type: String, required: true },
});

const Skills = mongoose.model('Skills', skillsSchema);

// Updated comprehensive skills based on user's requirements
const updatedSkills = [
  // Languages
  'c', 'cplusplus', 'python', 'javascript', 'typescript', 'swift', 'java', 'rust', 'latex', 'html5', 'css3', 'markdown',
  
  // Libraries & Frameworks
  'nodedotjs', 'express', 'react', 'nextdotjs', 'numpy', 'pandas', 'matplotlib', 'swiftui', 'uikit', 'tailwindcss', 'bootstrap', 'flask',
  
  // AI/ML
  'tensorflow', 'pytorch', 'opencv', 'scikit-learn', 'deep-learning', 'computer-vision', 'data-augmentation', 'generative-ai',
  
  // Databases & Tools
  'mongodb', 'mysql', 'amazonaws', 'firebase', 'jira', 'oracle', 'linux', 'git', 'github', 'figma', 'postman', 'cloudflare',
  
  // Cloud & DevOps
  'docker', 'kubernetes', 'vercel', 'netlify', 'render',
  
  // Additional Technologies
  'blockchain', 'ethereum', 'solidity', 'web3', 'metamask', 'gemini-api'
];

async function updateSkills() {
  try {
    // Clear existing skills
    await Skills.deleteMany({});
    console.log('Cleared existing skills');
    
    // Insert new skills
    const skillsToInsert = updatedSkills.map(slug => ({ slug }));
    await Skills.insertMany(skillsToInsert);
    console.log('Updated skills successfully');
    
    // Verify
    const count = await Skills.countDocuments();
    console.log(`Total skills in database: ${count}`);
    
    // Log categories
    console.log('\nSkills by category:');
    console.log('Languages:', updatedSkills.slice(0, 12).join(', '));
    console.log('Libraries:', updatedSkills.slice(12, 24).join(', '));
    console.log('AI/ML:', updatedSkills.slice(24, 28).join(', '));
    console.log('Databases/Tools:', updatedSkills.slice(28, 40).join(', '));
    console.log('Cloud/DevOps:', updatedSkills.slice(40, 45).join(', '));
    console.log('Additional:', updatedSkills.slice(45).join(', '));
    
  } catch (error) {
    console.error('Error updating skills:', error);
  } finally {
    mongoose.connection.close();
  }
}

updateSkills();

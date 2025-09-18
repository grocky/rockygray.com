# Rocky Gray - Personal Website

A modern, responsive personal website showcasing engineering leadership experience, platform architecture expertise, and community involvement. Built with React and hosted on AWS with infrastructure-as-code.

🌐 **Live Site**: [www.rockygray.com](https://www.rockygray.com)

## About

This website serves as a comprehensive professional portfolio, highlighting my career as an Engineering Manager at Reddit, where I lead platform teams for the Ads API ecosystem. The site emphasizes system design, reliability engineering, and cross-functional leadership in high-scale environments.

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Animations**: Motion/React for smooth interactions
- **Icons**: Lucide React
- **Build**: Create React App with custom build optimizations
- **Infrastructure**: AWS (S3, CloudFront, Route 53) managed with Terraform
- **CI/CD**: CircleCI with multi-stage pipeline
- **Deployment**: Automated S3 sync with intelligent caching

## Architecture Highlights

### Component Structure
The application follows a clean component-based architecture:
- Modular section components (Header, Hero, About, Highlights, etc.)
- TypeScript interfaces for type safety
- Reusable UI patterns with consistent styling

### Infrastructure
Modern cloud-native setup with infrastructure-as-code:
```
├── S3 Static Website Hosting
├── CloudFront CDN Distribution
├── Route 53 DNS Management
└── Terraform State Management
```

### CI/CD Pipeline
Efficient CircleCI workflow with optimized caching:
1. **Checkout**: Source code retrieval with SHA-based caching
2. **Dependencies**: npm install with package-lock caching
3. **Build**: Production build with git SHA injection
4. **Deploy**: Automated S3 sync with cache headers (main branch only)

## Key Features

- **Professional Focus**: Engineering leadership, platform design, API governance
- **Community Involvement**: Youth basketball commissioner, poker organizer
- **Project Showcase**: Full-stack applications with modern architecture patterns
- **Technical Writing**: Links to blog posts on system design and engineering practices
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Strategic caching, optimized assets, smooth animations

## Local Development

### Prerequisites
- Node.js (current LTS)
- npm
- AWS CLI (for deployment)
- Terraform (for infrastructure)

### Getting Started
```bash
# Install dependencies
make node_modules
# or
npm install

# Start development server
make start
# or
npm run start

# Build for production
make build

# Deploy to AWS (requires AWS credentials)
make publish
```

### Infrastructure Management
```bash
# Initialize Terraform
make infra-init

# Plan infrastructure changes
make infra-plan

# Apply infrastructure
make infra-apply
```

## Deployment

The site automatically deploys via CircleCI when changes are pushed to the `main` branch. The deployment process:

1. Builds the React application with production optimizations
2. Syncs static assets to S3 with long-term caching (`max-age=604800`)
3. Syncs HTML files with no-cache headers for immediate updates
4. CloudFront invalidation handled automatically

## Custom Domain & SSL

- **Domain**: www.rockygray.com (managed via Route 53)
- **SSL**: Automatic HTTPS via CloudFront and AWS Certificate Manager
- **CDN**: Global content distribution for optimal performance

## Professional Positioning

This website demonstrates:
- **Leadership Experience**: Engineering management at scale (Reddit Ads API Platform)
- **System Design**: Platform architecture, reliability patterns, API governance
- **Technical Expertise**: Modern development practices, cloud infrastructure, CI/CD
- **Community Impact**: Youth sports leadership, technical community building
- **Communication**: Technical writing and speaking on platform engineering topics

## Repository Structure

```
├── src/
│   ├── components/           # Modular React components
│   ├── App.tsx              # Main application component
│   └── Logo.tsx             # Custom logo component
├── public/                  # Static assets
├── infrastructure/          # Terraform AWS infrastructure
├── .circleci/              # CI/CD configuration
├── Makefile                # Build and deployment automation
└── package.json            # Dependencies and scripts
```

## Design Philosophy

The site embraces a clean, professional aesthetic with:
- Typography-focused design highlighting content hierarchy
- Subtle animations enhancing user experience without distraction
- Consistent color palette reflecting personal branding
- Experimental design elements showcasing creative technical approaches

## Contact

For speaking opportunities, technical consulting, or platform engineering discussions:
- **Email**: rocky.grayjr@gmail.com
- **LinkedIn**: [linkedin.com/in/grocky](https://www.linkedin.com/in/grocky)
- **GitHub**: [github.com/grocky](https://github.com/grocky)

---

*This repository serves as both a professional showcase and a demonstration of modern full-stack development practices, infrastructure automation, and engineering leadership principles.*
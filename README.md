# RuralHealthConnect - Modern Health Information Platform

A modern, scalable health information social platform built with Next.js 14, TypeScript, and PostgreSQL. This is a complete rewrite of the original Streamlit-based RuralHealthConnect application with enhanced features, better performance, and production-ready architecture.

## 🚀 Features

### Core Features ✅
- **Modern Authentication**: NextAuth.js v5 with multiple providers (Google, GitHub, Credentials)
- **Professional Newsfeed**: LinkedIn-style posts with likes, comments, and image sharing
- **User Profiles**: Comprehensive profile management for healthcare professionals
- **Real-time Interactions**: Live updates for likes, comments, and messaging
- **Responsive Design**: Mobile-first design that works on all devices
- **Type Safety**: End-to-end TypeScript for better developer experience

### Coming Soon 🔄
- **Messaging System**: Private conversations between users
- **Professional Network**: Connect with healthcare professionals
- **Badge System**: Achievement system for community contributions
- **File Uploads**: Secure document and image sharing
- **Admin Dashboard**: Complete admin panel for user and content management
- **Analytics**: User engagement and platform analytics
- **Search**: Advanced search for posts, users, and resources
- **Notifications**: Real-time notifications for platform activities

## 🛠 Tech Stack

### Frontend
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** for modern React components
- **Lucide React** for icons

### Backend
- **Next.js API Routes** for server-side logic
- **Prisma ORM** for database management
- **PostgreSQL** for production database
- **NextAuth.js v5** for authentication

### Development Tools
- **ESLint** for code linting
- **Prettier** for code formatting
- **Turbopack** for faster development builds

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- PostgreSQL database
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ruralhealthconnect
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your database and authentication provider credentials:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/ruralhealthconnect"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   
   # Optional OAuth providers
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   GITHUB_ID="your-github-id"
   GITHUB_SECRET="your-github-secret"
   ```

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma db push
   
   # Optional: Seed the database
   npx prisma db seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── dashboard.tsx     # Main dashboard
│   └── landing-page.tsx  # Landing page
├── lib/                   # Utility libraries
│   ├── prisma.ts         # Prisma client
│   └── utils.ts          # Utility functions
├── auth.ts               # NextAuth configuration
└── types/                # TypeScript type definitions
prisma/
├── schema.prisma         # Database schema
└── migrations/           # Database migrations
```

## 🗃 Database Schema

The application uses a comprehensive PostgreSQL schema with the following main entities:

- **Users**: Healthcare professionals and community members
- **Posts**: User-generated content with rich text and images
- **Comments**: Threaded comments on posts
- **Likes**: Social engagement tracking
- **Messages**: Private messaging between users
- **Badges**: Achievement system for user engagement
- **Analytics**: User activity and engagement tracking
- **Memberships**: Different access tiers for users

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push

### Environment Variables for Production
```env
DATABASE_URL="your-production-database-url"
NEXTAUTH_SECRET="your-production-secret"
NEXTAUTH_URL="https://your-domain.com"
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆚 Migration from Streamlit

This Next.js application is a complete rewrite of the original Streamlit-based RuralHealthConnect. Key improvements include:

| Aspect | Streamlit (Old) | Next.js (New) |
|--------|----------------|---------------|
| **Performance** | Server-side only, 3-5s loads | Client-side rendering, <1s navigation |
| **Scalability** | Single process, max 100 users | Auto-scaling, 100K+ users |
| **Mobile** | Poor responsive design | PWA-ready, app-like experience |
| **Real-time** | Manual page refresh | Live updates via WebSockets |
| **SEO** | Poor for content discovery | Excellent with SSR |
| **Type Safety** | Python dynamic typing | End-to-end TypeScript |
| **Deployment** | Single server | Edge computing, global CDN |

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

Built with ❤️ for rural healthcare communities

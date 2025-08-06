import { PrismaClient } from '@prisma/client'
import bcryptjs from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create memberships
  const basicMembership = await prisma.membership.upsert({
    where: { id: 'basic' },
    update: {},
    create: {
      id: 'basic',
      name: 'Basic',
      description: 'Basic access to the platform',
      price: 0,
      duration: 365,
      features: {
        posts: true,
        comments: true,
        likes: true,
        messaging: false,
        analytics: false
      }
    }
  })

  const premiumMembership = await prisma.membership.upsert({
    where: { id: 'premium' },
    update: {},
    create: {
      id: 'premium',
      name: 'Premium',
      description: 'Full access with advanced features',
      price: 99.99,
      duration: 365,
      features: {
        posts: true,
        comments: true,
        likes: true,
        messaging: true,
        analytics: true,
        priority_support: true
      }
    }
  })

  // Create sample users
  const hashedPassword = await bcryptjs.hash('password123', 12)
  
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@ruralhealthconnect.org' },
    update: {},
    create: {
      email: 'admin@ruralhealthconnect.org',
      name: 'Dr. Sarah Johnson',
      username: 'dr_sarah',
      bio: 'Rural Medicine Specialist with 15 years of experience in community healthcare.',
      role: 'ADMIN',
      membershipId: premiumMembership.id,
      emailVerified: new Date(),
    }
  })

  const doctorUser = await prisma.user.upsert({
    where: { email: 'mike@ruralhealthconnect.org' },
    update: {},
    create: {
      email: 'mike@ruralhealthconnect.org',
      name: 'Nurse Mike Rodriguez',
      username: 'nurse_mike',
      bio: 'Community Health Nurse passionate about rural healthcare access and prevention.',
      role: 'USER',
      membershipId: basicMembership.id,
      emailVerified: new Date(),
    }
  })

  // Create sample badges
  const welcomeBadge = await prisma.badge.upsert({
    where: { id: 'welcome' },
    update: {},
    create: {
      id: 'welcome',
      title: 'Welcome to the Community',
      description: 'Successfully joined RuralHealthConnect',
      category: 'engagement',
      level: 'bronze',
      icon: '🏥',
      criteria: {
        type: 'registration',
        requirement: 'Complete profile setup'
      }
    }
  })

  const firstPostBadge = await prisma.badge.upsert({
    where: { id: 'first-post' },
    update: {},
    create: {
      id: 'first-post',
      title: 'First Post',
      description: 'Created your first post',
      category: 'content',
      level: 'bronze',
      icon: '📝',
      criteria: {
        type: 'posts',
        requirement: 1
      }
    }
  })

  // Create sample posts
  const post1 = await prisma.post.create({
    data: {
      content: 'Just finished a telemedicine session with a patient 200 miles away. Technology is truly transforming rural healthcare access! 🏥💻 #RuralHealth #Telemedicine',
      authorId: adminUser.id,
    }
  })

  const post2 = await prisma.post.create({
    data: {
      content: 'Hosting a health screening event in our community center this weekend. Prevention is always better than cure! Looking forward to connecting with local families. #RuralHealth #Prevention #CommunityHealth',
      authorId: doctorUser.id,
    }
  })

  // Create sample likes
  await prisma.like.create({
    data: {
      userId: doctorUser.id,
      postId: post1.id,
    }
  })

  await prisma.like.create({
    data: {
      userId: adminUser.id,
      postId: post2.id,
    }
  })

  // Create sample comments
  await prisma.comment.create({
    data: {
      content: 'This is fantastic! Telemedicine has been a game-changer for our rural clinic too.',
      userId: doctorUser.id,
      postId: post1.id,
    }
  })

  await prisma.comment.create({
    data: {
      content: 'Count me in! Community health screenings are so important.',
      userId: adminUser.id,
      postId: post2.id,
    }
  })

  // Award welcome badges
  await prisma.userBadge.create({
    data: {
      userId: adminUser.id,
      badgeId: welcomeBadge.id,
    }
  })

  await prisma.userBadge.create({
    data: {
      userId: doctorUser.id,
      badgeId: welcomeBadge.id,
    }
  })

  // Award first post badges
  await prisma.userBadge.create({
    data: {
      userId: adminUser.id,
      badgeId: firstPostBadge.id,
    }
  })

  await prisma.userBadge.create({
    data: {
      userId: doctorUser.id,
      badgeId: firstPostBadge.id,
    }
  })

  // Create sample analytics events
  await prisma.analytics.createMany({
    data: [
      {
        eventType: 'user_registration',
        userId: adminUser.id,
        metadata: { source: 'direct' }
      },
      {
        eventType: 'user_registration', 
        userId: doctorUser.id,
        metadata: { source: 'direct' }
      },
      {
        eventType: 'post_created',
        userId: adminUser.id,
        metadata: { postId: post1.id }
      },
      {
        eventType: 'post_created',
        userId: doctorUser.id,
        metadata: { postId: post2.id }
      }
    ]
  })

  console.log('✅ Database seeded successfully!')
  console.log('\n📊 Created:')
  console.log('- 2 memberships (Basic, Premium)')
  console.log('- 2 users (Admin, Doctor)')
  console.log('- 2 badges (Welcome, First Post)')
  console.log('- 2 posts with likes and comments')
  console.log('- 4 analytics events')
  console.log('\n🔑 Demo credentials:')
  console.log('- Email: admin@ruralhealthconnect.org')
  console.log('- Email: mike@ruralhealthconnect.org')
  console.log('- Password: Any password (for demo)')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('❌ Seed failed:', e)
    await prisma.$disconnect()
    process.exit(1)
  })

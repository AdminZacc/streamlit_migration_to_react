// Simple database connection test
const { PrismaClient } = require('@prisma/client')

async function testConnection() {
  const prisma = new PrismaClient()
  
  try {
    console.log('🔍 Testing database connection...')
    await prisma.$connect()
    console.log('✅ Database connection successful!')
    
    // Try a simple query
    const result = await prisma.$queryRaw`SELECT version();`
    console.log('📊 Database version:', result[0].version)
    
  } catch (error) {
    console.error('❌ Database connection failed:', error.message)
    if (error.message.includes('P1001')) {
      console.log('💡 This means the DATABASE_URL is incorrect or the database is not reachable.')
      console.log('📝 Please check your Supabase connection string in .env.local')
    }
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()

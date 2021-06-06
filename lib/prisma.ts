import { PrismaClient } from "@prisma/client"

// https://github.com/nextauthjs/next-auth/issues/824
declare global {
  namespace NodeJS {
    interface Global {
      prisma: any;
    }
  }
}

let prisma: PrismaClient

if(process.env.NODE_ENV === "production"){
  prisma = new PrismaClient()
} else {
  if(!global.prisma){
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma
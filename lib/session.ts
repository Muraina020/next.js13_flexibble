import { getServerSession } from "next-auth/next";
import {NextAuthOptions, User} from "next-auth";
import {AdapterUser} from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import jsonwebtoken from "jsonwebtoken";
import {JWT} from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
    providers: [
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID!,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        // })
        GoogleProvider({
            clientId: '240742137801-c22kqfdf06mghfqljo2uevoog66ln5bi.apps.googleusercontent.com',
            clientSecret: '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',
        })
    ],
//     jwt: {
//         encode: ({secret, token}) => {

//         },
//         decode: async ({secret, token}) => {

//         }
// },
theme: {
    colorScheme: "light",
    logo: "/logo.png"
},
callbacks: {
    async session({ session }){
      return session
    },
    async signIn({ user } : {user: AdapterUser | User}) {

        try {
        // get the user if they exist

        // if they don't exist, create them

        // return true if they exist or were created
         return true

        } catch (error: any) {
           console.log(error);
           return false;
        }
    }
}
}
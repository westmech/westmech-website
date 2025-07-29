import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                const user = await User.findOne({ email: credentials.email })
                if (!user) return null;
                const isValid = await bcrypt.compare(credentials.password, user.password);
                if (!isValid) return null;
                return {
                    id: user._id.toString(),
                    email: user.email,
                    name: user.firstName + " " + user.lastName,
                    role: user.role,
                };
            }
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 7*24*60*60, // login expires after 7 days
    },
    secret:process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/members-portal/sign-in",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
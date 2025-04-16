import { SignedIn, SignUp, UserButton } from "@clerk/react-router";

export default function SignUpPage() {
    return (
        <div className="flex justify-center items-center h-screen">
        <SignedIn>
          <UserButton />
        </SignedIn>
        </div>
    )
}
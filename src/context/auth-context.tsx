/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

// context/AppContext.tsx
import { usePathname, useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

// Define the AppContextProps interface properly
interface AppContextProps {
  user: any | null; // Type user as User or null
}

// Create the context with a default value of `undefined`
const AuthContext = createContext<AppContextProps | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null) // Initialize with null
  const router = useRouter()
  const pathname = usePathname()

  // Listen to the Firebase auth state and set the user
  // Redirect logic if the user is not authenticated
  useEffect(() => {
    setUser({ name: "John Doe" }) // Mock user
    if (user && (
      pathname === "/signin" ||
      pathname === "/signup"
    )) {
      toast.success("You will be redirected to /learner in 3s")
      setTimeout(() => {
        router.push("/learner") // Redirect to the home page or another page  
      }, 3000)

    }
  }, [user, router, pathname])

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use the auth context
export const useAuth = (): AppContextProps => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

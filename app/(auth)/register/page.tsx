// app/(auth)/register/page.tsx
import RoleToggle, { type UserType } from "@/components/auth/RoleToggle";
import { ShieldCheck, Star, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Image from "next/image";

export default async function RegisterPage({
    searchParams,
}: {
    searchParams: Promise<Record<string, string | string[]>>;
}) {
    const params = await searchParams;
    const raw = Array.isArray(params?.type) ? params.type[0] : params?.type;
    const type: UserType =
        raw === "provider" || raw === "customer" ? (raw as UserType) : "provider";


    return (
        <>
            {/* LEFT: marketing block (hidden on small) */}
            <section className="flex-col justify-center hidden md:flex">
                <div className="max-w-md">
                    {/* brand */}
                    <div className="flex items-center gap-3 mb-6">
                        <Image src="/logo.png" alt="Crown Standard" width={40} height={40} />
                        <div className="leading-tight">
                            <p className="font-semibold">Crown Standard</p>
                            <p className="text-sm text-[#6B7280]">Cleaning Co.</p>
                        </div>
                    </div>

                    <h1 className="text-3xl font-semibold leading-snug text-[#0B0B0B]">
                        Professional Cleaning <br className="hidden lg:block" /> Made Simple
                    </h1>
                    <p className="mt-3 text-sm text-[#6B7280]">
                        Connect with trusted cleaning professionals or grow your cleaning business.
                        Experience the gold standard in cleaning services.
                    </p>

                    <ul className="mt-8 space-y-5">
                        <li className="flex items-start gap-3">
                            <span className="grid h-9 w-9 place-items-center rounded-md bg-[#F0E2C9] text-[#B8892D]">
                                <ShieldCheck className="w-5 h-5" />
                            </span>
                            <div>
                                <p className="font-medium">Trusted &amp; Verified</p>
                                <p className="text-sm text-[#6B7280]">
                                    All service providers are background checked
                                </p>
                            </div>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="grid h-9 w-9 place-items-center rounded-md bg-[#F0E2C9] text-[#B8892D]">
                                <Star className="w-5 h-5" />
                            </span>
                            <div>
                                <p className="font-medium">Top Rated</p>
                                <p className="text-sm text-[#6B7280]">
                                    4.8+ average rating from satisfied customers
                                </p>
                            </div>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="grid h-9 w-9 place-items-center rounded-md bg-[#F0E2C9] text-[#B8892D]">
                                <Users className="w-5 h-5" />
                            </span>
                            <div>
                                <p className="font-medium">Growing Community</p>
                                <p className="text-sm text-[#6B7280]">
                                    Join thousands of happy customers and providers
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* RIGHT: form card */}
            <section className="relative p-5">
                {/* right edge gradient slab like figma */}
                <div className="relative rounded-2xl bg-white shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-[#F3F4F6] p-5 sm:p-6 lg:p-7">
                    <header className="mb-4">
                        <h2 className="text-2xl font-semibold">Join as a {type === "provider" ? "Provider" : "Customer"}</h2>
                        <p className="mt-1 text-sm text-[#6B7280]">
                            {type === "provider"
                                ? "Create your provider account and start earning with Crown Standard – keep 100% of your tips!"
                                : "Create your customer account to book trusted cleaners and manage your services easily."}
                        </p>
                    </header>

                    {/* Role selector (updates search param) */}
                    <RoleToggle value={type} />

                    <form className="mt-4 space-y-4" action={"/api/register"} method="post">
                        <input type="hidden" name="type" value={type} />
                        <Input
                            name="name"
                            placeholder="Full Name"
                            aria-label="Full Name"
                            icon={
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5Z" stroke="#9CA3AF" />
                                    <path d="M4 22c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#9CA3AF" />
                                </svg>
                            }
                        />
                        <Input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            aria-label="Email Address"
                            icon={
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 6h16v12H4z" stroke="#9CA3AF" />
                                    <path d="m4 7 8 6 8-6" stroke="#9CA3AF" />
                                </svg>
                            }
                        />
                        <Input
                            name="password"
                            type="password"
                            placeholder="Password"
                            aria-label="Password"
                            autoComplete="new-password"
                            icon={
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <rect x="3" y="10" width="18" height="11" rx="2" stroke="#9CA3AF" />
                                    <path d="M8 10V7a4 4 0 1 1 8 0v3" stroke="#9CA3AF" />
                                </svg>
                            }
                        />
                        <Input
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            aria-label="Confirm Password"
                            autoComplete="new-password"
                            icon={
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <rect x="3" y="10" width="18" height="11" rx="2" stroke="#9CA3AF" />
                                    <path d="M8 10V7a4 4 0 1 1 8 0v3" stroke="#9CA3AF" />
                                </svg>
                            }
                        />

                        <Button type="submit" variant="gold" full className="rounded-full">
                            Sign In
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[#E5E7EB]" />
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-white px-2 text-xs uppercase text-[#9CA3AF]">Or</span>
                        </div>
                    </div>

                    {/* Google */}
                    <Button type="button" variant="dark" full className="gap-2">
                        <svg width="18" height="18" viewBox="0 0 533.5 544.3" aria-hidden>
                            <path fill="#4285F4" d="M533.5 278.4c0-18.6-1.7-37.1-5.3-55H272v104h146.9c-6.3 34-25.3 63-54 82.3v68h87.4c51.2-47.2 81.2-116.8 81.2-199.3Z" />
                            <path fill="#34A853" d="M272 544.3c73.5 0 135.2-24.3 180.2-65.9l-87.4-68c-24.2 16.3-55.2 26-92.8 26-71.2 0-131.6-47.9-153.2-112.2H28.2v70.5C72.7 487.4 166.6 544.3 272 544.3Z" />
                            <path fill="#FBBC05" d="M118.8 324.2c-10-29.5-10-61.5 0-91l.1-70.5H28.2C10.2 203.1 0 236.1 0 272s10.2 68.9 28.2 109.3l90.6-57.1Z" />
                            <path fill="#EA4335" d="M272 106.7c39.9-.6 78.3 14.1 107.7 41.5l80.1-80.1C407.2 24.7 345.5 0 272 0 166.6 0 72.7 56.9 28.2 162.2l90.7 70.5C140.4 154.9 200.8 106.7 272 106.7Z" />
                        </svg>
                        Continue With Google
                    </Button>

                    {/* Bottom link */}
                    <p className="mt-3 text-center text-sm text-[#6B7280]">
                        Already have an account?{" "}
                        <a href={`/login?type=${type}`} className="font-medium text-[#0B0B0B] underline-offset-4 hover:underline">
                            Log in
                        </a>
                    </p>
                </div>
            </section>
        </>
    );
}

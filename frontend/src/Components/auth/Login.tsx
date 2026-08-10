import { useState, type FormEvent, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Check,
  FileIcon,
  HardDrive,
  Lock,
  Mail,
  Server,
  User,
  Eye,
  EyeOff,
} from "lucide-react"

type AuthMode = "login" | "register"

export default function Login() {
  const [mode, setMode] = useState<AuthMode>("login")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const isLogin = mode === "login"

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isLogin) {
      console.log("Login submitted")
    } else {
      console.log("Registration submitted")
    }
  }

  const switchMode = () => {
    setShowPassword(false)
    setShowConfirmPassword(false)
    setMode(isLogin ? "register" : "login")
  }

  return (
    <motion.div
      animate={{
        backgroundColor: isLogin ? "#050505" : "#f5f5f5",
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-10"
    >
      {/* Background glow */}

      <motion.div
        animate={{
          opacity: isLogin ? 1 : 0,
        }}
        transition={{ duration: 0.7 }}
        className="pointer-events-none absolute left-[-15%] top-[-15%] h-[500px] w-[500px] rounded-full bg-white/[0.035] blur-[130px]"
      />

      <motion.div
        animate={{
          opacity: isLogin ? 1 : 0,
        }}
        transition={{ duration: 0.7 }}
        className="pointer-events-none absolute bottom-[-15%] right-[-10%] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-[130px]"
      />

      <motion.div
        animate={{
          opacity: isLogin ? 0 : 1,
        }}
        transition={{ duration: 0.7 }}
        className="pointer-events-none absolute left-[-15%] top-[-15%] h-[500px] w-[500px] rounded-full bg-black/[0.04] blur-[130px]"
      />

      <motion.div
        animate={{
          opacity: isLogin ? 0 : 1,
        }}
        transition={{ duration: 0.7 }}
        className="pointer-events-none absolute bottom-[-15%] right-[-10%] h-[500px] w-[500px] rounded-full bg-black/[0.025] blur-[130px]"
      />

      {/* Main glass container */}

      <motion.div
        layout
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 grid w-full max-w-5xl overflow-hidden rounded-[32px] border shadow-2xl md:grid-cols-2"
        style={{
          borderColor: isLogin
            ? "rgba(255,255,255,0.10)"
            : "rgba(0,0,0,0.10)",

          backgroundColor: isLogin
            ? "rgba(255,255,255,0.035)"
            : "rgba(255,255,255,0.65)",

          boxShadow: isLogin
            ? "0 30px 100px rgba(0,0,0,0.45)"
            : "0 30px 100px rgba(0,0,0,0.12)",

          backdropFilter: "blur(30px)",
        }}
      >
        {/* LEFT SIDE */}

        <motion.div
          layout
          animate={{
            backgroundColor: isLogin
              ? "rgba(255,255,255,0.035)"
              : "rgba(0,0,0,0.035)",
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative hidden min-h-[680px] overflow-hidden border-r md:block"
          style={{
            borderColor: isLogin
              ? "rgba(255,255,255,0.08)"
              : "rgba(0,0,0,0.08)",
          }}
        >
          {/* Grid */}

          <motion.div
            animate={{
              opacity: isLogin ? 0.4 : 0.15,
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: isLogin
                ? "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)"
                : "linear-gradient(rgba(0,0,0,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.045) 1px, transparent 1px)",

              backgroundSize: "42px 42px",
            }}
          />

          {/* Decorative circles */}

          <motion.div
            animate={{
              rotate: isLogin ? 0 : 180,
              scale: isLogin ? 1 : 0.95,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
            style={{
              borderColor: isLogin
                ? "rgba(255,255,255,0.07)"
                : "rgba(0,0,0,0.07)",
            }}
          />

          <motion.div
            animate={{
              rotate: isLogin ? 180 : 0,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed"
            style={{
              borderColor: isLogin
                ? "rgba(255,255,255,0.08)"
                : "rgba(0,0,0,0.08)",
            }}
          />

          <div className="relative flex h-full flex-col justify-between p-10">
            {/* Logo */}

            <motion.div
              animate={{
                color: isLogin ? "#ffffff" : "#050505",
              }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <motion.div
                animate={{
                  backgroundColor: isLogin ? "#ffffff" : "#050505",
                  color: isLogin ? "#050505" : "#ffffff",
                }}
                transition={{ duration: 0.6 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl"
              >
                <HardDrive size={19} strokeWidth={2.5} />
              </motion.div>

              <span className="text-lg font-semibold tracking-tight">
                ShardFS
              </span>
            </motion.div>

            {/* Storage visual */}

            <div className="relative mx-auto w-full max-w-sm">
              <StorageAnimation isLogin={isLogin} />

              <AnimatePresence mode="wait">
                {isLogin ? (
                  <motion.div
                    key="login-copy"
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -15,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="mt-10 text-center"
                  >
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Your storage,
                      <br />
                      distributed.
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-white/40">
                      Access your files from a resilient storage network
                      designed to keep your data available.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="register-copy"
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -15,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="mt-10 text-center"
                  >
                    <h2 className="text-2xl font-semibold tracking-tight text-black">
                      Build your own
                      <br />
                      storage network.
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-black/40">
                      Create your ShardFS account and start experimenting with
                      distributed storage.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div
              animate={{
                color: isLogin
                  ? "rgba(255,255,255,0.25)"
                  : "rgba(0,0,0,0.25)",
              }}
              transition={{ duration: 0.6 }}
              className="text-xs"
            >
              Distributed storage infrastructure
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}

        <motion.div
          layout
          animate={{
            backgroundColor: isLogin
              ? "rgba(0,0,0,0.18)"
              : "rgba(255,255,255,0.5)",
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex min-h-[680px] items-center justify-center p-7 sm:p-10 lg:p-14"
        >
          <div className="w-full max-w-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{
                  opacity: 0,
                  x: isLogin ? -18 : 18,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: isLogin ? 18 : -18,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Heading */}

                <div className="mb-10">
                  <motion.div
                    animate={{
                      color: isLogin ? "#ffffff" : "#050505",
                    }}
                    transition={{ duration: 0.6 }}
                    className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl border"
                    style={{
                      borderColor: isLogin
                        ? "rgba(255,255,255,0.12)"
                        : "rgba(0,0,0,0.12)",
                    }}
                  >
                    {isLogin ? (
                      <Lock size={19} />
                    ) : (
                      <User size={19} />
                    )}
                  </motion.div>

                  <motion.p
                    animate={{
                      color: isLogin
                        ? "rgba(255,255,255,0.35)"
                        : "rgba(0,0,0,0.35)",
                    }}
                    transition={{ duration: 0.6 }}
                    className="text-xs font-medium uppercase tracking-[0.18em]"
                  >
                    {isLogin ? "Welcome back" : "Get started"}
                  </motion.p>

                  <motion.h1
                    animate={{
                      color: isLogin ? "#ffffff" : "#050505",
                    }}
                    transition={{ duration: 0.6 }}
                    className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
                  >
                    {isLogin
                      ? "Sign in to ShardFS"
                      : "Create your account"}
                  </motion.h1>

                  <motion.p
                    animate={{
                      color: isLogin
                        ? "rgba(255,255,255,0.4)"
                        : "rgba(0,0,0,0.4)",
                    }}
                    transition={{ duration: 0.6 }}
                    className="mt-3 text-sm leading-6"
                  >
                    {isLogin
                      ? "Access your files and manage your storage network."
                      : "Start building with distributed storage today."}
                  </motion.p>
                </div>

                {/* Form */}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {!isLogin && (
                    <InputField
                      label="Full name"
                      type="text"
                      placeholder="Enter your name"
                      icon={<User size={17} />}
                      isLogin={isLogin}
                    />
                  )}

                  <InputField
                    label="Email address"
                    type="email"
                    placeholder="you@example.com"
                    icon={<Mail size={17} />}
                    isLogin={isLogin}
                  />

                  <PasswordField
                    label="Password"
                    placeholder="Enter your password"
                    visible={showPassword}
                    setVisible={setShowPassword}
                    isLogin={isLogin}
                  />

                  {!isLogin && (
                    <PasswordField
                      label="Confirm password"
                      placeholder="Confirm your password"
                      visible={showConfirmPassword}
                      setVisible={setShowConfirmPassword}
                      isLogin={isLogin}
                    />
                  )}

                  {/* Login options */}

                  {isLogin && (
                    <div className="flex items-center justify-between pt-1">
                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="checkbox"
                          className="h-3.5 w-3.5 rounded border-white/20 bg-transparent accent-white"
                        />

                        <span className="text-xs text-white/35">
                          Remember me
                        </span>
                      </label>

                      <button
                        type="button"
                        className="text-xs text-white/45 transition hover:text-white"
                      >
                        Forgot password?
                      </button>
                    </div>
                  )}

                  {/* Register terms */}

                  {!isLogin && (
                    <div className="flex items-start gap-2 pt-1">
                      <Check
                        size={14}
                        className="mt-0.5 shrink-0 text-black/50"
                      />

                      <p className="text-xs leading-5 text-black/35">
                        By creating an account, you agree to the ShardFS
                        terms and privacy policy.
                      </p>
                    </div>
                  )}

                  {/* Submit */}

                  <motion.button
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.985,
                    }}
                    type="submit"
                    animate={{
                      backgroundColor: isLogin ? "#ffffff" : "#050505",
                      color: isLogin ? "#050505" : "#ffffff",
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-medium shadow-lg"
                  >
                    {isLogin
                      ? "Sign in"
                      : "Create account"}

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </motion.button>
                </form>

                {/* Divider */}

                <motion.div
                  animate={{
                    backgroundColor: isLogin
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(0,0,0,0.08)",
                  }}
                  transition={{ duration: 0.6 }}
                  className="my-8 h-px"
                />

                {/* Switch */}

                <div className="text-center">
                  <motion.span
                    animate={{
                      color: isLogin
                        ? "rgba(255,255,255,0.35)"
                        : "rgba(0,0,0,0.35)",
                    }}
                    transition={{ duration: 0.6 }}
                    className="text-sm"
                  >
                    {isLogin
                      ? "Don't have an account?"
                      : "Already have an account?"}
                  </motion.span>

                  <button
                    type="button"
                    onClick={switchMode}
                    className={`ml-2 text-sm font-medium underline underline-offset-4 transition ${
                      isLogin
                        ? "text-white/70 hover:text-white"
                        : "text-black/70 hover:text-black"
                    }`}
                  >
                    {isLogin
                      ? "Create one"
                      : "Sign in"}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom branding */}

      <motion.div
        animate={{
          color: isLogin
            ? "rgba(255,255,255,0.2)"
            : "rgba(0,0,0,0.2)",
        }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-5 text-[10px] tracking-[0.15em]"
      >
        SHARDFS · DISTRIBUTED STORAGE
      </motion.div>
    </motion.div>
  )
}

function InputField({
  label,
  type,
  placeholder,
  icon,
  isLogin,
}: {
  label: string
  type: string
  placeholder: string
  icon: ReactNode
  isLogin: boolean
}) {
  return (
    <div>
      <motion.label
        animate={{
          color: isLogin
            ? "rgba(255,255,255,0.55)"
            : "rgba(0,0,0,0.55)",
        }}
        transition={{ duration: 0.6 }}
        className="mb-2 block text-xs font-medium"
      >
        {label}
      </motion.label>

      <div className="relative">
        <motion.div
          animate={{
            color: isLogin
              ? "rgba(255,255,255,0.3)"
              : "rgba(0,0,0,0.3)",
          }}
          transition={{ duration: 0.6 }}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
        >
          {icon}
        </motion.div>

        <motion.input
          type={type}
          placeholder={placeholder}
          required
          animate={{
            color: isLogin ? "#ffffff" : "#050505",
            backgroundColor: isLogin
              ? "rgba(255,255,255,0.035)"
              : "rgba(0,0,0,0.035)",
          }}
          transition={{ duration: 0.6 }}
          className={`h-12 w-full rounded-xl border pl-11 pr-4 text-sm outline-none transition-all ${
            isLogin
              ? "border-white/10 placeholder:text-white/30 focus:border-white/25 focus:bg-white/[0.055]"
              : "border-black/10 placeholder:text-black/30 focus:border-black/20 focus:bg-black/[0.05]"
          }`}
        />
      </div>
    </div>
  )
}

function PasswordField({
  label,
  placeholder,
  visible,
  setVisible,
  isLogin,
}: {
  label: string
  placeholder: string
  visible: boolean
  setVisible: (value: boolean) => void
  isLogin: boolean
}) {
  return (
    <div>
      <motion.label
        animate={{
          color: isLogin
            ? "rgba(255,255,255,0.55)"
            : "rgba(0,0,0,0.55)",
        }}
        transition={{ duration: 0.6 }}
        className="mb-2 block text-xs font-medium"
      >
        {label}
      </motion.label>

      <div className="relative">
        <motion.div
          animate={{
            color: isLogin
              ? "rgba(255,255,255,0.3)"
              : "rgba(0,0,0,0.3)",
          }}
          transition={{ duration: 0.6 }}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
        >
          <Lock size={17} />
        </motion.div>

        <motion.input
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          required
          animate={{
            color: isLogin ? "#ffffff" : "#050505",
            backgroundColor: isLogin
              ? "rgba(255,255,255,0.035)"
              : "rgba(0,0,0,0.035)",
          }}
          transition={{ duration: 0.6 }}
          className={`h-12 w-full rounded-xl border pl-11 pr-12 text-sm outline-none transition-all ${
            isLogin
              ? "border-white/10 placeholder:text-white/30 focus:border-white/25 focus:bg-white/[0.055]"
              : "border-black/10 placeholder:text-black/30 focus:border-black/20 focus:bg-black/[0.05]"
          }`}
        />

        <motion.button
          type="button"
          onClick={() => setVisible(!visible)}
          animate={{
            color: isLogin
              ? "rgba(255,255,255,0.3)"
              : "rgba(0,0,0,0.3)",
          }}
          transition={{ duration: 0.6 }}
          className="absolute right-4 top-1/2 -translate-y-1/2 transition-opacity hover:opacity-70"
        >
          {visible ? (
            <EyeOff size={17} />
          ) : (
            <Eye size={17} />
          )}
        </motion.button>
      </div>
    </div>
  )
}

function StorageAnimation({
  isLogin,
}: {
  isLogin: boolean
}) {
  const lineColor = isLogin
    ? "rgba(255,255,255,0.12)"
    : "rgba(0,0,0,0.12)"

  const mutedColor = isLogin
    ? "rgba(255,255,255,0.3)"
    : "rgba(0,0,0,0.3)"

  const cardBackground = isLogin
    ? "rgba(255,255,255,0.045)"
    : "rgba(0,0,0,0.045)"

  return (
    <div className="relative h-[250px]">
      {/* Connection */}

      <motion.div
        animate={{
          backgroundColor: lineColor,
        }}
        transition={{ duration: 0.6 }}
        className="absolute left-1/2 top-[72px] h-[65px] w-px"
      />

      <motion.div
        animate={{
          backgroundColor: lineColor,
        }}
        transition={{ duration: 0.6 }}
        className="absolute left-[17%] right-[17%] top-[136px] h-px"
      />

      {/* Main file */}

      <motion.div
        animate={{
          backgroundColor: isLogin ? "#ffffff" : "#050505",
          color: isLogin ? "#050505" : "#ffffff",
          scale: isLogin ? 1 : 0.96,
        }}
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-2xl shadow-xl"
      >
        <FileIcon size={23} />
      </motion.div>

      {/* Nodes */}

      {[18, 50, 82].map((position, index) => (
        <motion.div
          key={index}
          animate={{
            backgroundColor: cardBackground,
            borderColor: lineColor,
            color: mutedColor,
            y: isLogin ? 0 : 5,
          }}
          transition={{
            duration: 0.7,
            delay: index * 0.04,
          }}
          className="absolute top-[136px] w-[82px] -translate-x-1/2 rounded-2xl border p-3 text-center backdrop-blur-xl"
          style={{
            left: `${position}%`,
          }}
        >
          <ServerIcon />

          <p className="mt-2 text-[10px]">
            Node 0{index + 1}
          </p>

          <div className="mx-auto mt-2 flex items-center justify-center gap-1">
            <motion.span
              animate={{
                backgroundColor: isLogin ? "#ffffff" : "#050505",
              }}
              transition={{ duration: 0.6 }}
              className="h-1.5 w-1.5 rounded-full"
            />

            <span className="text-[8px]">
              Online
            </span>
          </div>
        </motion.div>
      ))}

      {/* Status */}

      <motion.div
        animate={{
          y: [0, -5, 0],
          backgroundColor: cardBackground,
          borderColor: lineColor,
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
          backgroundColor: {
            duration: 0.6,
          },
          borderColor: {
            duration: 0.6,
          },
        }}
        className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-xl"
      >
        <motion.span
          animate={{
            backgroundColor: isLogin ? "#ffffff" : "#050505",
          }}
          transition={{ duration: 0.6 }}
          className="h-1.5 w-1.5 rounded-full"
        />

        <motion.span
          animate={{
            color: mutedColor,
          }}
          transition={{ duration: 0.6 }}
          className="text-[9px]"
        >
          Distributed & protected
        </motion.span>
      </motion.div>
    </div>
  )
}

function ServerIcon() {
  return (
    <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-lg border border-current/10">
      <Server size={12} />
    </div>
  )
}
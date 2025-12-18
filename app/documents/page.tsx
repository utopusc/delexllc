"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FileText, Download, Lock, Shield, CheckCircle, AlertCircle } from "lucide-react";

const CORRECT_PIN = "661923";

const documents = [
  {
    name: "Insurance Card - Unit 1641",
    filename: "1641 ins .card .pdf",
    category: "Insurance",
  },
  {
    name: "Insurance Card - Unit 1642",
    filename: "1642 ins.card.pdf",
    category: "Insurance",
  },
  {
    name: "Insurance Card - Unit 3234",
    filename: "3234 ins.card.pdf",
    category: "Insurance",
  },
  {
    name: "Insurance Card - Volvo 337",
    filename: "337 volvo ins.card.pdf",
    category: "Insurance",
  },
  {
    name: "Insurance Card - Freightliner 338",
    filename: "338 fr8lnr ins.card.pdf",
    category: "Insurance",
  },
  {
    name: "Proof of Insurance",
    filename: "proof of insurance.pdf",
    category: "Insurance",
  },
  {
    name: "MC Authority Copy",
    filename: "mc copy.pdf",
    category: "Authority",
  },
  {
    name: "W-9 Form",
    filename: "Po box w-9.pdf",
    category: "Authority",
  },
];

export default function DocumentsPage() {
  const [pin, setPin] = useState(["", "", "", "", "", ""]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  const handlePinChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only allow digits

    const newPin = [...pin];
    newPin[index] = value.slice(-1); // Only take last character
    setPin(newPin);
    setError("");

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all digits entered
    if (index === 5 && value) {
      const fullPin = [...newPin.slice(0, 5), value.slice(-1)].join("");
      if (fullPin.length === 6) {
        verifyPin(fullPin);
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (pastedData.length === 6) {
      const newPin = pastedData.split("");
      setPin(newPin);
      verifyPin(pastedData);
    }
  };

  const verifyPin = (inputPin: string) => {
    setIsLoading(true);
    setError("");

    // Simulate verification delay for security feel
    setTimeout(() => {
      if (inputPin === CORRECT_PIN) {
        setIsAuthenticated(true);
      } else {
        setError("Invalid PIN. Please try again.");
        setPin(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
      setIsLoading(false);
    }, 800);
  };

  const handleDownload = (filename: string) => {
    const link = document.createElement("a");
    link.href = `/documents/${encodeURIComponent(filename)}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // PIN Entry Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative py-20 mb-12">
          <div className="absolute inset-0">
            <Image
              src="/images/7.png"
              alt="Delex LLC Documents"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Secure Documents
              </h1>
              <p className="text-xl text-gray-200">
                Access company documents with your PIN
              </p>
            </motion.div>
          </div>
        </div>

        {/* PIN Entry */}
        <div className="max-w-md mx-auto px-4 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-8"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Enter Access PIN
              </h2>
              <p className="text-gray-600">
                Please enter your 6-digit PIN to access documents
              </p>
            </div>

            {/* PIN Input */}
            <div className="flex justify-center gap-2 sm:gap-3 mb-6" onPaste={handlePaste}>
              {pin.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handlePinChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  disabled={isLoading}
                  className={`w-11 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold border-2 rounded-xl outline-none transition-all
                    ${error ? "border-red-400 bg-red-50" : "border-gray-300"}
                    ${digit ? "border-blue-500 bg-blue-50" : ""}
                    focus:border-blue-500 focus:ring-4 focus:ring-blue-100
                    disabled:opacity-50 disabled:cursor-not-allowed
                    text-gray-900`}
                />
              ))}
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center gap-2 text-red-600 mb-4"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Loading State */}
            {isLoading && (
              <div className="flex items-center justify-center gap-2 text-blue-600 mb-4">
                <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <span>Verifying...</span>
              </div>
            )}

            {/* Security Note */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl mt-6">
              <Shield className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600">
                This area contains confidential company documents. Unauthorized access is prohibited.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Documents List (After Authentication)
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-20 mb-12">
        <div className="absolute inset-0">
          <Image
            src="/images/7.png"
            alt="Delex LLC Documents"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <span className="text-green-400 font-semibold">Access Granted</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Company Documents
            </h1>
            <p className="text-xl text-gray-200">
              Download insurance cards and authority documents
            </p>
          </motion.div>
        </div>
      </div>

      {/* Documents Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Category: Insurance */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              Insurance Documents
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {documents
                .filter((doc) => doc.category === "Insurance")
                .map((doc, index) => (
                  <motion.div
                    key={doc.filename}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-blue-300 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                          <FileText className="w-6 h-6 text-red-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1 truncate">
                          {doc.name}
                        </h3>
                        <p className="text-sm text-gray-500">PDF Document</p>
                      </div>
                      <button
                        onClick={() => handleDownload(doc.filename)}
                        className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors flex-shrink-0 group-hover:scale-110 cursor-pointer"
                        title="Download"
                      >
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Category: Authority */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              Authority Documents
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {documents
                .filter((doc) => doc.category === "Authority")
                .map((doc, index) => (
                  <motion.div
                    key={doc.filename}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-green-300 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                          <Shield className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1 truncate">
                          {doc.name}
                        </h3>
                        <p className="text-sm text-gray-500">PDF Document</p>
                      </div>
                      <button
                        onClick={() => handleDownload(doc.filename)}
                        className="w-10 h-10 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center justify-center transition-colors flex-shrink-0 group-hover:scale-110 cursor-pointer"
                        title="Download"
                      >
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Security Footer */}
          <div className="mt-12 p-6 bg-gray-50 rounded-xl flex items-start gap-4">
            <Shield className="w-6 h-6 text-gray-400 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Confidential Documents</h4>
              <p className="text-sm text-gray-600">
                These documents are for authorized personnel only. Do not share or distribute without proper authorization.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiHome,
    FiUser,
    FiSettings,
    FiLogOut,
    FiChevronDown,
    FiShield,
} from 'react-icons/fi';
import { MdSchool } from 'react-icons/md';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: -10, opacity: 0 },
    show: { y: 0, opacity: 1 }
};

const hoverScale = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 }
};

const tapScale = {
    scale: 0.98
};

export default function AccountMenu() {
    const user = {
        "role": "ADMIN",
        "imgUrl": "",
        "fname": "Mahmoud",
        "lname": "Matter",
        "email": "mahmoodgamal045@gmail.com"
    };

    return (
        <header
            className="sticky top-0 z-50 border-gray-800 bg-gray-900 border-t backdrop-blur-lg shadow-sm"
        >
            <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
                {/* Logo with motion */}
                <motion.div whileHover={{ scale: 1.03 }}>
                    <Link href="/" className="flex items-center space-x-2 group">
                        <motion.div
                            whileHover={{ rotate: 12 }}
                            className="p-2 rounded-lg bg-gradient-to-br from-sky-500 to-sky-900 text-white"
                        >
                            <MdSchool className="text-xl" />
                        </motion.div>
                        <span className="text-xl font-bold bg-gradient-to-r from-sky-400 to-sky-900 bg-clip-text text-transparent">
                            College Management System
                        </span>
                    </Link>
                </motion.div>

                {/* Navigation */}
                <nav className="flex items-center space-x-4 sm:space-x-6">
                    {user && (
                        <>
                            {/* Desktop Links with stagger animation */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="show"
                                className="hidden md:flex items-center gap-6"
                            >
                                <motion.div variants={itemVariants}>
                                    <Link
                                        href="/user/dashboard"
                                        className="flex items-center gap-2 text-white hover:text-sky-600 font-medium transition-colors"
                                    >
                                        <FiHome size={18} />
                                        Dashboard
                                    </Link>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <Link
                                        href="/user/profile"
                                        className="flex items-center gap-2 text-white hover:text-sky-600 font-medium transition-colors"
                                    >
                                        <FiUser size={18} />
                                        Profile
                                    </Link>
                                </motion.div>

                                {user.role === 'ADMIN' && (
                                    <motion.div variants={itemVariants}>
                                        <Link
                                            href="/admin/dashboard"
                                            className="flex items-center gap-2 text-white hover:text-sky-600 font-medium transition-colors"
                                        >
                                            <FiShield size={18} />
                                            Admin
                                        </Link>
                                    </motion.div>
                                )}
                            </motion.div>

                            {/* Account Dropdown with motion */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <motion.div
                                        whileHover={hoverScale}
                                        whileTap={tapScale}
                                    >
                                        <Button
                                            variant="ghost"
                                            className="flex items-center gap-2 px-2 hover:bg-gray-700/10 rounded-lg"
                                        >
                                            {user.imgUrl ? (
                                                <motion.div whileHover={{ rotate: 5 }}>
                                                    <Image
                                                        src={user.imgUrl}
                                                        alt="Profile"
                                                        width={36}
                                                        height={36}
                                                        className="w-9 h-9 rounded-full border-2 border-indigo-100"
                                                    />
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    whileHover={{ rotate: 5 }}
                                                    className="w-9 h-9 rounded-full bg-indigo-100 text-white flex items-center justify-center border-2 border-indigo-100 dark:border-indigo-900/50"
                                                >
                                                    <span className="text-sky-600 dark:text font-medium">
                                                        {user.fname?.charAt(0).toUpperCase() || 'U'}
                                                    </span>
                                                </motion.div>
                                            )}
                                            <span className="hidden sm:inline text-white">
                                                {user.fname}
                                            </span>
                                            <motion.div
                                                animate={{ rotate: 0 }}
                                                whileHover={{ rotate: 180 }}
                                            >
                                                <FiChevronDown className="text-white" />
                                            </motion.div>
                                        </Button>
                                    </motion.div>
                                </DropdownMenuTrigger>

                                <AnimatePresence>
                                    <DropdownMenuContent
                                        className="w-56 mt-2 shadow-xl rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                                        align="end"
                                        asChild
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <DropdownMenuLabel className="font-normal p-4">
                                                <div className="flex flex-col space-y-1">
                                                    <p className="text-sm font-medium leading-none text-gray-900 dark:text-white">
                                                        {user.fname} {user.lname}
                                                    </p>
                                                    <p className="text-xs leading-none text-gray-500">
                                                        {user.email}
                                                    </p>
                                                </div>
                                            </DropdownMenuLabel>
                                            <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />

                                            <motion.div variants={containerVariants}>
                                                <DropdownMenuItem className="p-0 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                                    <motion.div variants={itemVariants}>
                                                        <Link href="/user/profile" className="flex items-center w-full px-4 py-2">
                                                            <FiUser className="mr-2 text-gray-700" size={16} />
                                                            Profile
                                                        </Link>
                                                    </motion.div>
                                                </DropdownMenuItem>

                                                <DropdownMenuItem className="p-0 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                                    <motion.div variants={itemVariants}>
                                                        <Link href="/user/dashboard" className="flex items-center w-full px-4 py-2">
                                                            <FiHome className="mr-2 text-gray-700" size={16} />
                                                            Dashboard
                                                        </Link>
                                                    </motion.div>
                                                </DropdownMenuItem>

                                                <DropdownMenuItem className="p-0 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                                    <motion.div variants={itemVariants}>
                                                        <Link href="/user/settings" className="flex items-center w-full px-4 py-2">
                                                            <FiSettings className="mr-2 text-gray-700" size={16} />
                                                            Settings
                                                        </Link>
                                                    </motion.div>
                                                </DropdownMenuItem>

                                                {user.role === 'ADMIN' && (
                                                    <>
                                                        <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
                                                        <DropdownMenuItem className="p-0 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                                            <motion.div variants={itemVariants}>
                                                                <Link href="/admin/dashboard" className="flex items-center w-full px-4 py-2">
                                                                    <FiShield className="mr-2 text-gray-700" size={16} />
                                                                    Admin Dashboard
                                                                </Link>
                                                            </motion.div>
                                                        </DropdownMenuItem>
                                                    </>
                                                )}

                                                <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
                                                <DropdownMenuItem className="p-0 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                                    <motion.div
                                                        variants={itemVariants}
                                                        whileHover={{ x: 5 }}
                                                    >
                                                        <Link href="/sign-out" className="flex items-center w-full px-4 py-2 text-red-600 dark:text-red-400">
                                                            <FiLogOut className="mr-2" size={16} />
                                                            Sign Out
                                                        </Link>
                                                    </motion.div>
                                                </DropdownMenuItem>
                                            </motion.div>
                                        </motion.div>
                                    </DropdownMenuContent>
                                </AnimatePresence>
                            </DropdownMenu>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}
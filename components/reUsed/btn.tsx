import { cn } from '@/lib/utils';
import React from 'react'
import { Button } from '../ui/button';

interface BtnProps {
    onClick?: () => void;
    children:React.ReactNode
    className?: string
    type?: "fill" | "out_line" | "Danger" 
}

const btn_types = {
    "out_line": "bg-transparent border-2 border-gray-500 hover:border-cyan-400 px-8 py-3 rounded-lg text-xl font-semibold transition",
    "fill": "bg-cyan-600 hover:bg-cyan-700 rounded-lg text-xl font-semibold transition",
    "Danger": "bg-red-600 hover:bg-red-700 text-white rounded-lg text-xl font-semibold transition"
}

export default function Btn({ children, onClick, className, type = "fill" }: BtnProps) {
    return (
        <Button className={cn(btn_types[type], className)} onClick={onClick}>
            {children}
        </Button>
    )
}

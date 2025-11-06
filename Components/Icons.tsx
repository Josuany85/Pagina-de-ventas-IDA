import React from 'react';

const iconProps = {
    className: "w-10 h-10",
    strokeWidth: 1.5,
};

const smallIconProps = {
    className: "w-6 h-6",
    strokeWidth: 2,
}

const paymentIconProps = {
    className: "w-10 h-10 text-gray-700",
}

export const Icons = {
    Gift: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#D4AF37]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H7.5a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A3.375 3.375 0 0 0 6.125 8.25v2.25H17.875v-2.25A3.375 3.375 0 0 0 12 4.875Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.875v16.5M17.875 10.5h-11.75" />
        </svg>
    ),
    PlayCircle: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-white/80 hover:text-white transition-colors duration-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
        </svg>
    ),
    LockClosed: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
    ),
    BouncingChevronDown: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-400 animate-bounce">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
    ),
    ChevronDown: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
    ),
    XCircle: (props: {className?: string}) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${iconProps.className} ${props.className}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    ),
    CheckCircle: (props: {className?: string}) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${smallIconProps.className} ${props.className}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    ),
    Robot: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a12.022 12.022 0 0 1 2.08 6.06M15.59 14.37a6 6 0 0 0-5.84-7.38m5.84 7.38a12.015 12.015 0 0 0-5.84-7.38m5.84 7.38L18 16.5m-2.41 2.13a6 6 0 0 1-5.84-7.38m0 0a12.015 12.015 0 0 1 5.84-7.38m-5.84 7.38L6 8.5m2.41 2.13a6 6 0 0 0 5.84 7.38m0 0a12.022 12.022 0 0 0-2.08-6.06m-3.76 6.06a12.01 12.01 0 0 1-5.84-7.38m0 0a6 6 0 0 1 5.84-7.38m0 0L6 8.5m3.76-2.13a12.01 12.01 0 0 0-5.84 7.38" />
        </svg>
    ),
    ChartBar: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
    ),
    ChatBubble: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
        </svg>
    ),
    BookOpen: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
    ),
    Sparkles: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
        </svg>
    ),
    Rocket: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a12.022 12.022 0 0 1 2.08 6.06M15.59 14.37a6 6 0 0 0-5.84-7.38m5.84 7.38a12.015 12.015 0 0 0-5.84-7.38m5.84 7.38L18 16.5m-2.41 2.13a6 6 0 0 1-5.84-7.38m0 0a12.015 12.015 0 0 1 5.84-7.38m-5.84 7.38L6 8.5m2.41 2.13a6 6 0 0 0 5.84 7.38m0 0a12.022 12.022 0 0 0-2.08-6.06m-3.76 6.06a12.01 12.01 0 0 1-5.84-7.38m0 0a6 6 0 0 1 5.84-7.38m0 0L6 8.5m3.76-2.13a12.01 12.01 0 0 0-5.84 7.38" />
        </svg>
    ),
    WhatsApp: () => (
         <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.525 1.931 6.471l-1.297 4.728 4.839-1.286zM9.052 8.092c-.09-.264-.12-.396-.186-.411-.065-.014-.132-.028-.227-.028-.094 0-.227.014-.347.119s-.462.433-.58.733c-.118.3-.236.633-.236.965s.236.683.264.733c.028.05.118.149.236.253.227.194 1.156 1.841 2.82 2.509 1.406.564 1.67.668 1.944.839.275.17.58.263.809.349.275.104.462.05.58-.014.168-.09.683-.707.826-.855.144-.149.236-.253.292-.411s.056-.28.028-.364-.118-.17-.236-.28s-.396-.194-.552-.264c-.156-.069-.28-.104-.396-.05s-.28.28-.347.336c-.069.056-.126.084-.227.056s-.462-.168-1.259-.765c-.655-.52-1.088-1.164-1.144-1.342s-.056-.28 0-.364.236-.336.321-.422c.084-.084.118-.149.168-.227s.028-.149 0-.253-.28-.683-.396-.918z" />
        </svg>
    ),
    Crypto: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...paymentIconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-6h6" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.364 4.636A9 9 0 1 1 4.636 15.364 9 9 0 0 1 15.364 4.636Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 8.25h3" />
        </svg>
    ),
    Etecsa: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...paymentIconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l1.5-1.5 1.5 1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25v4.5" />
        </svg>
    ),
    Qvapay: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...paymentIconProps}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M9 12h3" />
            <path d="M12.5 14.5l-1 -2.5" />
            <path d="M15 12v-2.5a1.5 1.5 0 0 0 -3 0" />
        </svg>
    ),
    Payeer: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...paymentIconProps}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M9 9h4a2 2 0 1 1 0 4h-4v4" />
        </svg>
    ),
};

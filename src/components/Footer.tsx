import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LanguagePicker } from './LanguagePicker';
import Logo from './Logo.tsx';
import { ThemeToggle } from './ThemeToggle';

export function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="mt-16 py-8 border-t border-gray-200 dark:border-dark-600">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Left - Norwegian flag and tagline */}
                    <div className="flex items-center space-x-3">
                        <a 
                            href="https://github.com/HemmeligOrg/Hemmelig.app"
                            target="_blank"
                            className="flex items-center space-x-2 group"
                        >
                            <svg
                                className="w-5 h-3.5"
                                viewBox="0 0 22 16"
                                fill="none"
                                aria-label="Norwegian flag"
                            >
                                <rect width="22" height="16" fill="#BA0C2F" />
                                <rect x="6" width="4" height="16" fill="#FFFFFF" />
                                <rect y="6" width="22" height="4" fill="#FFFFFF" />
                                <rect x="7" width="2" height="16" fill="#00205B" />
                                <rect y="7" width="22" height="2" fill="#00205B" />
                            </svg>
                            <span className="text-gray-500 dark:text-slate-400 text-xs group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">
                                {t('footer.tagline')}
                            </span>
                        </a>
                    </div>

                    {/* Right - Links, social, theme */}
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://status.federation.network"
                            target="_blank"
                            className="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 text-xs transition-colors"
                        >
                            Status
                        </a>
                        <Link
                            to="/privacy"
                            className="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 text-xs transition-colors"
                        >
                            {t('footer.privacy')}
                        </Link>
                        <Link
                            to="/terms"
                            className="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 text-xs transition-colors"
                        >
                            {t('footer.terms')}
                        </Link>
                        <a
                            href="/api/docs"
                            className="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 text-xs transition-colors"
                        >
                            {t('footer.api')}
                        </a>
                        <div className="flex items-center space-x-2 pl-2 border-l border-gray-300 dark:border-dark-500">
                            <a
                                href="https://github.com/DatAres37/FN-Secrets"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 transition-colors"
                                aria-label="GitHub"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                href="https://federation.network"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 transition-colors"
                                aria-label="Federation Network"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="m12.48 1.75h1.47l0.26 0.49c0.15 0.27 0.62 1.09 1.06 1.82 0.44 0.73 1.18 1.99 1.65 2.79 1.78 3.01 4.9 8.28 5.97 10.06 0.61 1.01 1.11 1.92 1.11 2.03 0 0.16-0.96 0.18-8.06 0.18-4.44 0-8.06-0.04-8.06-0.09 0-0.06 0.29-0.61 0.65-1.22l0.66-1.12 5.08-0.04c4.55-0.02 5.09-0.05 5.16-0.23 0.07-0.18-1.62-3.18-2.88-5.13-0.24-0.35-0.42-0.67-0.42-0.7 0-0.04-0.6-1.07-1.34-2.29-0.73-1.23-1.42-2.41-1.54-2.61-0.12-0.21-0.67-1.15-1.23-2.09-0.56-0.94-1.02-1.74-1.02-1.78 0-0.04 0.66-0.07 1.48-0.07zm-1.97 0.72c0.09 0.19 0.66 1.16 1.25 2.15 0.59 1 1.72 2.91 2.51 4.26 1.3 2.19 1.73 2.92 2.37 3.98q1.73 2.88 1.74 3.03c0 0.06-0.64 0.11-1.43 0.11h-1.42l-1.09-1.84c-0.6-1.02-1.22-2.04-1.37-2.28-0.16-0.25-0.81-1.36-1.46-2.47-0.94-1.64-1.22-2.03-1.42-2-0.21 0.02-2.77 4.05-3.15 4.96-0.05 0.11-0.24 0.43-0.44 0.72-0.19 0.28-0.35 0.55-0.35 0.59 0 0.05-0.11 0.23-0.23 0.42-0.13 0.19-0.73 1.18-1.34 2.21-1.16 1.97-1.22 2.07-2.52 4.23l-0.82 1.36-0.25-0.42c-0.14-0.23-0.44-0.71-0.67-1.07-0.64-1-0.68-0.92 2.96-6.91 0.06-0.1 0.32-0.55 0.57-1 0.26-0.45 0.57-0.95 0.68-1.13 0.12-0.17 0.71-1.15 1.32-2.18 0.6-1.03 1.79-3.04 2.65-4.47 1.67-2.79 1.65-2.77 1.91-2.25zm0.45 7.29c0.83 1.35 0.92 0.96-0.99 4.16-0.91 1.52-1.73 2.91-1.82 3.08-0.09 0.17-0.23 0.43-0.31 0.56-0.08 0.14-0.37 0.61-0.63 1.04-0.77 1.26-1.53 1.15 8.22 1.15 7.21 0 8.57 0.03 8.57 0.17 0 0.1-0.27 0.63-0.59 1.19l-0.59 1.01h-20.69l0.29-0.53c0.25-0.47 0.57-1.02 1.04-1.78 0.09-0.14 0.42-0.7 0.74-1.25 0.99-1.68 3.69-6.22 3.99-6.68 0.15-0.25 0.44-0.72 0.63-1.07 0.2-0.34 0.43-0.73 0.52-0.87 0.08-0.14 0.28-0.49 0.43-0.79 0.36-0.68 0.41-0.65 1.19 0.61z" />
                                </svg>
                            </a>
                            <LanguagePicker />
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

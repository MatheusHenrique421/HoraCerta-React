import viteLogo from '/vite.svg';
import { useTheme } from '../../../shared/context/ThemeContext';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.5rem 1rem",
            background: "var(--bg-header)",
            borderBottom: "1px solid var(--border-color)"
        }}>
            {/* Logo e título à esquerda */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <img src={viteLogo} alt="Vite logo" style={{ width: "32px", height: "32px" }} />
                <h4>HoraCerta</h4>
            </div>

            {/* Botão de tema à direita */}
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Alternar tema" title={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}            >
                {theme === 'dark' ? <IconSun /> : <IconMoonStars />}
                <span style={{ fontSize: '0.9rem' }}>
                    {theme === 'dark' ? 'Claro' : 'Escuro'}
                </span>
            </button>
        </div>
    );
}
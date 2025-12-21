import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            pointerEvents: 'none',
            paddingTop: isScrolled ? '10px' : '25px'
        }}>
            <div className="header-outer-container" style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '0 20px',
                width: '100%'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    maxWidth: '1200px',
                    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(15px)',
                    padding: '18px 40px',
                    borderRadius: '100px',
                    border: '1.5px solid var(--primary)',
                    boxShadow: '0 12px 40px rgba(145, 85, 253, 0.2)',
                    pointerEvents: 'auto',
                    transition: 'all 0.5s ease'
                }} className="header-container">
                    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src="/src/assets/logo_icon.png"
                            alt="FOTACARGO"
                            className="logo-img"
                            style={{
                                height: '85px',
                                filter: 'drop-shadow(0 0 12px rgba(145, 85, 253, 0.6)) brightness(1.2)',
                                transition: 'transform 0.3s ease'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="desktop-nav">
                        <ul style={{ display: 'flex', gap: '35px', fontWeight: 800, color: '#1A1A1A', fontSize: '1rem' }}>
                            {[
                                { label: 'Home', path: '/' },
                                { label: 'About Us', path: '/about' },
                                { label: 'Services', path: '/services' }
                            ].map((item) => (
                                <li key={item.label}>
                                    <NavLink
                                        to={item.path}
                                        style={({ isActive }) => ({
                                            color: isActive ? 'var(--primary)' : 'inherit',
                                            transition: 'color 0.3s ease'
                                        })}
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div style={{ height: '28px', width: '2px', background: 'rgba(145, 85, 253, 0.2)' }}></div>
                        <Link to="/quote" className="btn btn-primary" style={{
                            padding: '14px 32px',
                            borderRadius: '50px',
                            fontSize: '0.9rem',
                            fontWeight: 900,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            boxShadow: '0 8px 15px rgba(145, 85, 253, 0.3)'
                        }}>
                            Get a Quote <ArrowRight size={18} />
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        style={{
                            display: 'none',
                            color: '#1A1A1A',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            zIndex: 1100,
                            padding: '8px'
                        }}
                        className="mobile-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Premium Mobile Menu Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setMobileMenuOpen(false)}
                            style={{
                                position: 'fixed',
                                inset: 0,
                                background: 'rgba(0,0,0,0.6)',
                                backdropFilter: 'blur(8px)',
                                zIndex: 1050,
                                pointerEvents: 'auto'
                            }}
                        />

                        {/* Menu Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{
                                type: 'spring',
                                damping: 30,
                                stiffness: 300,
                                duration: 0.4
                            }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                right: 0,
                                width: '85%',
                                maxWidth: '400px',
                                height: '100vh',
                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(249, 245, 255, 0.98) 100%)',
                                backdropFilter: 'blur(20px)',
                                padding: '30px 24px',
                                zIndex: 1100,
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '-10px 0 50px rgba(145, 85, 253, 0.2)',
                                pointerEvents: 'auto',
                                overflowY: 'auto'
                            }}
                        >
                            {/* Header with Close Button */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
                                <img src="/src/assets/logo_icon.png" alt="FOTACARGO" style={{ height: '50px' }} />
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{
                                        background: 'var(--primary)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '48px',
                                        height: '48px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        color: 'white',
                                        boxShadow: '0 4px 12px rgba(145, 85, 253, 0.3)'
                                    }}
                                >
                                    <X size={24} strokeWidth={3} />
                                </motion.button>
                            </div>

                            {/* Navigation Links */}
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: 'auto' }}>
                                {[
                                    { label: 'Home', path: '/' },
                                    { label: 'About Us', path: '/about' },
                                    { label: 'Services', path: '/services' }
                                ].map((item, i) => (
                                    <motion.li
                                        key={item.label}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.1, duration: 0.3 }}
                                    >
                                        <Link
                                            to={item.path}
                                            onClick={() => setMobileMenuOpen(false)}
                                            style={{
                                                color: '#1A1A1A',
                                                display: 'flex',
                                                alignItems: 'center',
                                                padding: '18px 20px',
                                                borderRadius: '16px',
                                                fontSize: '1.3rem',
                                                fontWeight: 700,
                                                transition: 'all 0.3s ease',
                                                background: 'transparent'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = 'var(--primary)';
                                                e.currentTarget.style.color = 'white';
                                                e.currentTarget.style.transform = 'translateX(8px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = 'transparent';
                                                e.currentTarget.style.color = '#1A1A1A';
                                                e.currentTarget.style.transform = 'translateX(0)';
                                            }}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.3 }}
                            >
                                <Link
                                    to="/quote"
                                    className="btn btn-primary"
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        padding: '20px',
                                        fontSize: '1.1rem',
                                        borderRadius: '16px',
                                        fontWeight: 900,
                                        boxShadow: '0 8px 20px rgba(145, 85, 253, 0.3)'
                                    }}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Get a Quote <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
          
          /* Mobile header styling */
          header {
            padding-top: 20px !important;
          }
          
          .header-outer-container {
            padding: 0 12px !important;
          }
          
          .header-container { 
            width: 100% !important;
            max-width: calc(100vw - 24px) !important;
            padding: 14px 18px !important;
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: center !important;
            background: rgba(255, 255, 255, 0.95) !important;
            backdrop-filter: blur(10px) !important;
            border: 1px solid rgba(145, 85, 253, 0.2) !important;
            box-shadow: 0 4px 20px rgba(145, 85, 253, 0.1) !important;
            border-radius: 20px !important;
          }
          
          .logo-img { 
            height: 50px !important;
            filter: drop-shadow(0 0 8px rgba(145, 85, 253, 0.4)) brightness(1.1) !important;
          }
        }
        
        nav ul li a:hover {
          color: var(--primary) !important;
          transform: translateY(-2px);
        }
        nav ul li a {
          display: inline-block;
          transition: all 0.3s ease;
        }
      `}</style>
        </header>
    );
};

export default Header;

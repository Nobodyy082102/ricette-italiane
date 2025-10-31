/**
 * Tema colori ispirato alla bandiera italiana
 */

export const Colors = {
  // Colori principali bandiera italiana
  verde: '#008C45',
  bianco: '#FFFFFF',
  rosso: '#CD212A',

  // Varianti verde
  verdePrimario: '#008C45',
  verdeScuro: '#006634',
  verdeChiaro: '#00A651',
  verdePastello: '#E8F5E9',

  // Varianti rosso
  rossoPrimario: '#CD212A',
  rossoScuro: '#9B1C26',
  rossoChiaro: '#E53935',
  rossoPastello: '#FFEBEE',

  // Grigi e neutri
  grigio50: '#FAFAFA',
  grigio100: '#F5F5F5',
  grigio200: '#EEEEEE',
  grigio300: '#E0E0E0',
  grigio400: '#BDBDBD',
  grigio500: '#9E9E9E',
  grigio600: '#757575',
  grigio700: '#616161',
  grigio800: '#424242',
  grigio900: '#212121',

  // Colori funzionali
  successo: '#4CAF50',
  errore: '#F44336',
  warning: '#FF9800',
  info: '#2196F3',

  // Sfondo
  sfondoChiaro: '#FAFAFA',
  sfondoScuro: '#121212',

  // Testo
  testoChiaro: '#212121',
  testoScuro: '#FFFFFF',
  testoSecondario: '#757575',

  // Difficoltà
  difficoltaFacile: '#4CAF50',
  difficoltaMedia: '#FF9800',
  difficoltaDifficile: '#F44336',

  // Overlay
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayChiaro: 'rgba(0, 0, 0, 0.3)',
};

export const LightTheme = {
  primary: Colors.verdePrimario,
  secondary: Colors.rossoPrimario,
  background: Colors.sfondoChiaro,
  surface: Colors.bianco,
  text: Colors.testoChiaro,
  textSecondary: Colors.testoSecondario,
  border: Colors.grigio300,
  error: Colors.errore,
  success: Colors.successo,
  warning: Colors.warning,
};

export const DarkTheme = {
  primary: Colors.verdeChiaro,
  secondary: Colors.rossoChiaro,
  background: Colors.sfondoScuro,
  surface: Colors.grigio900,
  text: Colors.testoScuro,
  textSecondary: Colors.grigio400,
  border: Colors.grigio700,
  error: Colors.errore,
  success: Colors.successo,
  warning: Colors.warning,
};

const lucide = require('lucide-react');
const icons = ['Minus', 'Square', 'X', 'Play', 'StopCircle', 'Copy', 'ArrowLeft', 'Wallet', 'User', 'Key', 'LogOut', 'LayoutDashboard', 'PieChart', 'Eye', 'EyeOff', 'Shield', 'Users', 'Bell', 'Send', 'Activity', 'Settings', 'Ban', 'CheckCircle', 'Check', 'Download', 'Headphones', 'QrCode', 'Lock', 'Unlock', 'Briefcase', 'Menu', 'Trash2', 'AlertTriangle', 'Sun', 'Moon'];

for (const icon of icons) {
  if (!lucide[icon]) {
    console.log(`Missing icon: ${icon}`);
  }
}
console.log('Done checking icons.');

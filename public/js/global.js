// Funciones globales para la aplicación

// Función para copiar al portapapeles
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Copiado al portapapeles', 'success');
  }).catch(() => {
    showToast('Error al copiar', 'error');
  });
}

// Función para compartir CV
function shareCV() {
  if (navigator.share) {
    navigator.share({
      title: 'CV - Desarrollador Full Stack',
      text: 'Echa un vistazo a mi CV como desarrollador Full Stack',
      url: window.location.origin + '/cv-desarrollador-fullstack.pdf'
    });
  } else {
    copyToClipboard(window.location.origin + '/cv-desarrollador-fullstack.pdf');
    showToast('Enlace copiado al portapapeles', 'success');
  }
}

// Función para mostrar notificaciones toast
function showToast(message, type = 'success') {
  // Crear toast si no existe
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 z-50';
    toast.innerHTML = `
      <div class="flex items-center space-x-2">
        <i class="ph ph-check-circle text-xl"></i>
        <span id="toast-message"></span>
      </div>
    `;
    document.body.appendChild(toast);
  }
  
  const toastMessage = document.getElementById('toast-message');
  const toastIcon = toast.querySelector('.ph');
  
  if (toastMessage) {
    toastMessage.textContent = message;
  }
  if (toastIcon) {
    toastIcon.className = type === 'success' ? 'ph ph-check-circle text-xl' : 'ph ph-x-circle text-xl';
  }
  
  // Cambiar color según el tipo
  toast.className = toast.className.replace(/bg-[a-z0-9\-]+/i, type === 'success' ? 'bg-green-600' : 'bg-red-600');
  toast.style.backgroundColor = type === 'success' ? '#16a34a' : '#dc2626';
  
  // Mostrar toast
  toast.style.transform = 'translateX(0)';
  
  // Ocultar después de 3 segundos
  setTimeout(() => {
    toast.style.transform = 'translateX(120%)';
  }, 3000);
}

// Hacer las funciones disponibles globalmente
window.copyToClipboard = copyToClipboard;
window.shareCV = shareCV;
window.showToast = showToast; 
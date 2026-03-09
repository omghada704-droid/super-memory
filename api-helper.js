/**
 * API Helper Functions for Neon Database
 * استخدام: import * as api from './api-helper.js';
 */

const API_BASE = '/api';

/**
 * جلب جميع الطلبات
 */
export async function getOrders() {
  try {
    const response = await fetch(`${API_BASE}/get-orders`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    return { success: false, error: error.message };
  }
}

/**
 * إنشاء طلب جديد
 * @param {Object} orderData - بيانات الطلب
 */
export async function createOrder(orderData) {
  try {
    const response = await fetch(`${API_BASE}/create-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ orderData })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating order:', error);
    return { success: false, error: error.message };
  }
}

/**
 * تحديث حالة طلب
 * @param {string} orderId - رقم الطلب
 * @param {string} status - الحالة الجديدة
 */
export async function updateOrderStatus(orderId, status) {
  try {
    const response = await fetch(`${API_BASE}/update-order`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ orderId, status })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating order:', error);
    return { success: false, error: error.message };
  }
}

/**
 * إنشاء مستخدم جديد
 * @param {Object} userData - بيانات المستخدم
 */
export async function createUser(userData) {
  try {
    const response = await fetch(`${API_BASE}/create-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userData })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating user:', error);
    return { success: false, error: error.message };
  }
}

/**
 * تسجيل دخول
 * @param {string} email - البريد الإلكتروني
 * @param {string} password - كلمة المرور
 */
export async function login(email, password) {
  try {
    const response = await fetch(`${API_BASE}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    return { success: false, error: error.message };
  }
}

/**
 * جلب بيانات مستخدم من قاعدة البيانات
 * @param {string} email - البريد الإلكتروني
 */
export async function getUser(email) {
  try {
    const response = await fetch(`${API_BASE}/get-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    return { success: false, error: error.message };
  }
}

/**
 * تحديث بيانات مستخدم
 * @param {Object} userData - بيانات المستخدم المحدثة
 */
export async function updateUser(userData) {
  try {
    const response = await fetch(`${API_BASE}/update-user`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userData })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating user:', error);
    return { success: false, error: error.message };
  }
}

// Export for backward compatibility with existing code
window.MozakrtyAPI = {
  getOrders,
  createOrder,
  updateOrderStatus,
  createUser,
  login,
  getUser,
  updateUser
};

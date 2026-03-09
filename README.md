# منصة مذكرتي - قاعدة بيانات Neon

## إعداد قاعدة البيانات

### 1. تثبيت المكتبات اللازمة

```bash
npm install
```

### 2. إعداد متغيرات البيئة

أنشئ ملف `.env` في مجلد المشروع:
```
DATABASE_URL=postgresql://[your-neon-connection-string]
```

### 3. إنشاء الجداول

قم بتنفيذ ملف `database-schema.sql` في قاعدة بيانات Neon:

```sql
-- انسخ محتويات ملف database-schema.sql والصقها في Neon SQL Editor
```

## دوال API المتاحة

### 1. جلب جميع الطلبات
```
GET /api/get-orders
```

### 2. إنشاء طلب جديد
```
POST /api/create-order
Body: {
  "orderData": {
    "id": "ORD-123456",
    "customer": {
      "name": "Ahmed Mohamed",
      "email": "ahmed@example.com",
      "phone": "01xxxxxxxxx",
      "address": "Cairo, Egypt"
    },
    "itemsNames": "Product 1, Product 2",
    "itemsCount": 2,
    "total": 100,
    "shipping": 72,
    "finalTotal": 172,
    "paymentMethod": "فودافون كاش",
    "status": "pending"
  }
}
```

### 3. تحديث حالة طلب
```
PUT /api/update-order
Body: {
  "orderId": "ORD-123456",
  "status": "preparing"
}
```

### 4. إنشاء مستخدم جديد
```
POST /api/create-user
Body: {
  "userData": {
    "firstName": "Ahmed",
    "lastName": "Mohamed",
    "email": "ahmed@example.com",
    "mainPhone": "01xxxxxxxxx",
    "backupPhone": "01xxxxxxxxx",
    "grade": "الثانوية العامة",
    "gov": "القاهرة",
    "area": "مدينة نصر",
    "address": "شارع 1",
    "pass": "password123",
    "profilePic": "data:image/jpeg;base64,..."
  }
}
```

### 5. تسجيل دخول
```
POST /api/login
Body: {
  "email": "ahmed@example.com",
  "password": "password123"
}
```

## التطوير المحلي

```bash
npm run dev
```

سيفتح السيرفر على `http://localhost:3000`

## هيكل قاعدة البيانات

### جدول المستخدمين (users)
- `id`: المعرف الفريد
- `first_name`: الاسم الأول
- `last_name`: اسم الأب
- `email`: البريد الإلكتروني (فريد)
- `main_phone`: رقم الهاتف الأساسي
- `backup_phone`: رقم الهاتف الاحتياطي
- `grade`: السنة الدراسية
- `gov`: المحافظة
- `area`: المنطقة/المركز
- `address`: العنوان
- `password`: كلمة المرور
- `profile_pic`: الصورة الشخصية
- `created_at`: تاريخ الإنشاء
- `updated_at`: تاريخ آخر تحديث

### جدول الطلبات (orders)
- `id`: المعرف الفريد
- `order_id`: رقم الطلب (فريد)
- `customer_name`: اسم العميل
- `customer_email`: بريد العميل
- `customer_phone`: هاتف العميل
- `customer_address`: عنوان العميل
- `items_names`: أسماء المنتجات
- `items_count`: عدد المنتجات
- `total`: السعر الإجمالي للمنتجات
- `shipping`: مصروفية الشحن
- `final_total`: الإجمالي النهائي
- `payment_method`: طريقة الدفع
- `status`: حالة الطلب (pending, preparing, shipping, delivered)
- `created_at`: تاريخ الإنشاء
- `updated_at`: تاريخ آخر تحديث

### جدول المنتجات (products)
- `id`: المعرف الفريد
- `name`: اسم المنتج
- `description`: وصف المنتج
- `price`: السعر
- `image`: صورة المنتج
- `stock`: المخزون
- `active`: هل المنتج نشط
- `created_at`: تاريخ الإنشاء
- `updated_at`: تاريخ آخر تحديث

## ملاحظات مهمة

1. **الأمان**: في الإنتاج، يجب تشفير كلمات المرور باستخدام bcrypt
2. **التحقق**: أضف التحقق من صحة البيانات قبل إدخالها لقاعدة البيانات
3. **الصور**: الصور تُخزن كـ Base64 - للأداء الأفضل استخدم خدمة تخزين سحابي

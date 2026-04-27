import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-omni-select';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
}

interface Product {
  sku: string;
  title: string;
  price: number;
  inStock: boolean;
  category: string;
}

export const CustomTypeExample = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', avatar: '👨' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', avatar: '👩' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Moderator', avatar: '🧑' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', avatar: '👱' },
  ];

  const products: Product[] = [
    { sku: 'IPHONE15', title: 'iPhone 15', price: 999, inStock: true, category: 'Electronics' },
    { sku: 'MACBOOK', title: 'MacBook Pro', price: 2499, inStock: true, category: 'Computers' },
    { sku: 'AIRPODS', title: 'AirPods Pro', price: 249, inStock: false, category: 'Audio' },
    { sku: 'IPAD', title: 'iPad Air', price: 599, inStock: true, category: 'Tablets' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Custom Type Examples with TypeScript</Text>
      
      <View style={styles.section}>
        <Text style={styles.label}>Select User:</Text>
        <Dropdown<User>
          data={users}
          value={selectedUser}
          onChange={(value) => setSelectedUser(value as User | null)}
          labelField="name"
          valueField="id"
          placeholder="Select a user"
          renderItem={(user, isSelected) => (
            <View style={styles.userItem}>
              <Text style={styles.avatar}>{user.avatar}</Text>
              <View style={styles.userInfo}>
                <Text style={[styles.userName, isSelected && styles.selected]}>
                  {user.name}
                </Text>
                <Text style={styles.userRole}>{user.role}</Text>
              </View>
            </View>
          )}
        />
        {selectedUser && (
          <View style={styles.result}>
            <Text>Selected User:</Text>
            <Text>{selectedUser.name} - {selectedUser.email}</Text>
            <Text>Role: {selectedUser.role}</Text>
          </View>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Select Product:</Text>
        <Dropdown<Product>
          data={products}
          value={selectedProduct}
          onChange={(value) => setSelectedProduct(value as Product | null)}
          labelField="title"
          valueField="sku"
          placeholder="Select a product"
          search
          searchPlaceholder="Search products..."
          renderItem={(product, isSelected) => (
            <View style={styles.productItem}>
              <View style={styles.productInfo}>
                <Text style={[styles.productName, isSelected && styles.selected]}>
                  {product.title}
                </Text>
                <Text style={styles.productMeta}>
                  ${product.price} • {product.category}
                </Text>
              </View>
              {!product.inStock && (
                <Text style={styles.outOfStock}>Out of Stock</Text>
              )}
            </View>
          )}
        />
        {selectedProduct && (
          <View style={styles.result}>
            <Text>Selected Product:</Text>
            <Text>{selectedProduct.title} (SKU: {selectedProduct.sku})</Text>
            <Text>Price: ${selectedProduct.price}</Text>
            <Text>Status: {selectedProduct.inStock ? 'In Stock' : 'Out of Stock'}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  result: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    fontSize: 24,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
  },
  userRole: {
    fontSize: 12,
    color: '#666',
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
  },
  productMeta: {
    fontSize: 12,
    color: '#666',
  },
  outOfStock: {
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
  },
  selected: {
    color: '#007AFF',
  },
});
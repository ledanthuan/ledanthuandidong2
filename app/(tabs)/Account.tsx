import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, ScrollView } from 'react-native';

interface User {
  name: string;
  email: string;
  avatar: string;
  phoneNumber: string;
  address: string;
  joinDate: string;
  birthDate: string;
  gender: string;
  billingAddress: string;
  shippingAddress: string;
  recentOrder: string;
}

const user: User = {
  name: 'Nguyễn Văn A',
  email: 'nguyenvana@example.com',
  avatar: 'https://via.placeholder.com/150',
  phoneNumber: '0123456789',
  address: '123 Đường ABC, Phường XYZ, Quận 1, TP.HCM',
  joinDate: '01/01/2021',
  birthDate: '01/01/1990',
  gender: 'Nam',
  billingAddress: '123 Đường ABC, Phường XYZ, Quận 1, TP.HCM',
  shippingAddress: '456 Đường DEF, Phường GHI, Quận 2, TP.HCM',
  recentOrder: 'Đơn hàng #1234 - Ngày 01/09/2024',
};

const UserAccountScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Thông tin tài khoản</Text>

      <View style={styles.profileContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Số điện thoại:</Text>
        <Text style={styles.infoText}>{user.phoneNumber}</Text>
        
        <Text style={styles.infoLabel}>Địa chỉ:</Text>
        <Text style={styles.infoText}>{user.address}</Text>
        
        <Text style={styles.infoLabel}>Ngày sinh:</Text>
        <Text style={styles.infoText}>{user.birthDate}</Text>

        <Text style={styles.infoLabel}>Giới tính:</Text>
        <Text style={styles.infoText}>{user.gender}</Text>
        
        <Text style={styles.infoLabel}>Địa chỉ thanh toán:</Text>
        <Text style={styles.infoText}>{user.billingAddress}</Text>
        
        <Text style={styles.infoLabel}>Địa chỉ giao hàng:</Text>
        <Text style={styles.infoText}>{user.shippingAddress}</Text>
        
        <Text style={styles.infoLabel}>Ngày tham gia:</Text>
        <Text style={styles.infoText}>{user.joinDate}</Text>
        
        <Text style={styles.infoLabel}>Đơn hàng gần nhất:</Text>
        <Text style={styles.infoText}>{user.recentOrder}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Chỉnh sửa thông tin')}>
          <Text style={styles.buttonText}>Chỉnh sửa thông tin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => alert('Đổi mật khẩu')}>
          <Text style={styles.buttonText}>Đổi mật khẩu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => alert('Xem danh sách đơn hàng')}>
          <Text style={styles.buttonText}>Đơn hàng của tôi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => alert('Xem danh sách yêu thích')}>
          <Text style={styles.buttonText}>Danh sách yêu thích</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => alert('Đăng xuất')}>
          <Text style={styles.buttonText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  infoContainer: {
    width: '100%',
    marginBottom: 20,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  buttonsContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserAccountScreen;

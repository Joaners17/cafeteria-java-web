package com.cafeteria.sistema.repository;
import com.cafeteria.sistema.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends JpaRepository<Producto, Integer> {
}
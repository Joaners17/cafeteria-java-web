package com.cafeteria.sistema.controller;
import com.cafeteria.sistema.model.Producto;
import com.cafeteria.sistema.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/productos")
public class ProductoController {
    @Autowired
    private ProductoRepository repo;

    @GetMapping
    public List<Producto> getProductos() {
        return repo.findAll();
    }
}
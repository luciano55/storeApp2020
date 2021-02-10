package com.example.demo.service;

import java.util.Collection;

import com.example.demo.entity.ShoppingCartView;
import com.example.demo.model.ShoppingCartViewRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import org.springframework.web.bind.annotation.PathVariable;

@Service
public class ShoppingCartViewImp implements ShoppingCartViewService {
  @Autowired
  private ShoppingCartViewRepository repositoryCartView;

  public Collection<ShoppingCartView> getAllProduct() {
    return repositoryCartView.findAll();
  }

  public Collection<ShoppingCartView> getAllProductClient(@PathVariable Integer idclient) {
    Collection<ShoppingCartView> shoppingCartViews = repositoryCartView.findByIdclient(idclient);

    return shoppingCartViews;

  }
}

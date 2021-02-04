package com.example.demo.model;

import java.util.Collection;
import java.util.Map;
import java.util.Optional;

import com.example.demo.entity.Productstore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

@RestController
public class StoreRESTController {
  @Autowired
  private StoreproductRepository repository;

  @RequestMapping(value = "/storerest222/", method = RequestMethod.GET)
  public Collection<Productstore> productosAll(StoreproductRepository storeproductRepository) {
    return repository.findAll();
  }

  @RequestMapping(value = "/storerest/{id}", method = RequestMethod.GET)
  public Optional<Productstore> getAnuncio(@PathVariable long id) {

    return repository.findById(id);

  }

  @RequestMapping(value = "/storerest/", method = RequestMethod.GET)
  public Page<Productstore> productosAll(@PageableDefault(size = 5)
  // @PageableDefault(sort = { "modelo", "proveedor" }, value = 6)

  Pageable page) {
    return repository.findAll(page);
  }

  @RequestMapping(value = "/storerest/?page={num}&size={sizePage}", method = RequestMethod.GET)
  public Page<Productstore> getPages(@RequestParam Map<String, Object> params) {
    int pageNumber = (int) params.get("page");
    int size = (int) params.get("size");

    if (params.get("page") == null)
      pageNumber = 0;
    if (params.get("size") == null)
      size = 4;

    PageRequest page = PageRequest.of(pageNumber, size);
    return repository.findAll(page);

  }

  @RequestMapping(value = "/visor/{sizeVisor}", method = RequestMethod.GET)
  public boolean setsizeVisor(@PathVariable long sizeVisor) {

    RequestContextHolder.currentRequestAttributes().setAttribute("sizeVisor", sizeVisor,
        RequestAttributes.SCOPE_SESSION);
    System.out.println("sizeVisor;" + sizeVisor);

    return true;

  }
}

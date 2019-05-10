package com.betterprojectsfaster.jhipster.test.jhipster6java11.repository;

import com.betterprojectsfaster.jhipster.test.jhipster6java11.domain.Product;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Product entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}

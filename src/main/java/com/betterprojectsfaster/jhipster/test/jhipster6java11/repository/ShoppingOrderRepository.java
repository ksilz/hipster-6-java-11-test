package com.betterprojectsfaster.jhipster.test.jhipster6java11.repository;

import com.betterprojectsfaster.jhipster.test.jhipster6java11.domain.ShoppingOrder;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data  repository for the ShoppingOrder entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ShoppingOrderRepository extends JpaRepository<ShoppingOrder, Long> {

    @Query("select shoppingOrder from ShoppingOrder shoppingOrder where shoppingOrder.buyer.login = ?#{principal.username}")
    List<ShoppingOrder> findByBuyerIsCurrentUser();

}

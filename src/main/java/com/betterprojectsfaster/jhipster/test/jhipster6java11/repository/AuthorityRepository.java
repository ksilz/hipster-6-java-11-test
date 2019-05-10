package com.betterprojectsfaster.jhipster.test.jhipster6java11.repository;

import com.betterprojectsfaster.jhipster.test.jhipster6java11.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}

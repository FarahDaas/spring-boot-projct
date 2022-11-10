package com.project.med.Repository;

import org.springframework.data.repository.CrudRepository;

import com.project.med.Entity.Patient;

public interface PatientRepository extends CrudRepository<Patient, Long> {

}

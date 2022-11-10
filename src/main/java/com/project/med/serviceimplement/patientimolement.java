package com.project.med.serviceimplement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.med.Entity.Patient;
import com.project.med.Repository.PatientRepository;
import com.project.med.serviceinterface.patientinterface;

@Service
public class patientimolement implements patientinterface {
 
	@Autowired
	private PatientRepository patientrep;
	@Override
	public Patient savePatient(Patient patient) {
		// TODO Auto-generated method stub
		return patientrep.save(patient) ;
	}

	@Override
	public Patient updatePatient(Patient patient) {
		// TODO Auto-generated method stub
		return patientrep.save(patient);
	}

	@Override
	public List<Patient> findallPatient() {
		// TODO Auto-generated method stub
		return (List<Patient>) patientrep.findAll();
	}

	@Override
	public void deletPatient(Long id) {
		// TODO Auto-generated method stub
		patientrep.deleteById(id);
	}

}

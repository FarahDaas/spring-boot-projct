package com.project.med.Entity;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("assistant")
public class Assistant extends User {

}

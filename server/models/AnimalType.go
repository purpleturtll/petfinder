package models

import "gorm.io/gorm"

type AnimalType struct {
	gorm.Model
	Type string `json:"type"`
}

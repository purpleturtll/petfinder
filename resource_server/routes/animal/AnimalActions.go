package animal

import (
	"encoding/json"
	"fmt"
	"inzynierka/db"
	"inzynierka/models"
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"
	"gorm.io/gorm"
)

func Create(c echo.Context) error {
	animal := new(models.Animal)
	if err := c.Bind(animal); err != nil {
		return err
	}
	b, _ := json.MarshalIndent(animal, "", "\t")
	fmt.Printf("%v\n", string(b))
	db.Connection().Create(animal)
	return c.String(http.StatusCreated, "Created")
}

func Read(c echo.Context) error {
	id := c.QueryParam("id")
	id_int, _ := strconv.Atoi(id)
	animal := &models.Animal{}
	result := db.Connection().First(&animal, id_int)
	if result.Error == gorm.ErrRecordNotFound {
		return c.String(http.StatusNotFound, "Not Found")
	}
	return c.JSON(http.StatusOK, animal)
}

func Update(c echo.Context) error {
	return nil
}

func Delete(c echo.Context) error {
	return nil
}
